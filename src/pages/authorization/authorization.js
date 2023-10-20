import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { server } from '../../bff';
import { Input, Button, H2 } from '../../components';
import styled from 'styled-components';
import { setUserAction } from '../../actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constans';

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Заполните логин')
    .matches(/^\w+/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
    .min(3, 'Неверно заполнен логин. Минимум 3 символа')
    .max(15, 'Неверно заполнен логин. Максимум 15 символов'),
  password: yup
    .string()
    .required('Заполните пароль')
    .matches(
      /^[\w#%]+$/,
      'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %'
    )
    .min(6, 'Неверно заполнен пароль. Минимум 6 символов')
    .max(30, 'Неверно заполнен пароль. Максимуммум 30 символов'),
});

const StyledAuthorization = styled.div`
  width: 260px;

  & form {
    display: flex;
    flex-direction: column;
  }
`;

const ErroMessage = styled.div`
  background-color: #ff6347;
  padding: 5px;
  margin-top: 5px;
`;

const RegistrationLink = styled(Link)`
  display: inline-block;
  text-decoration: underline;
  margin-top: 5px;
`;

export const Authorization = ({ className }) => {
  const [serverError, setServerError] = useState(null);
  const store = useStore();
  const dispatch = useDispatch();

  const roleId = useSelector(selectUserRole);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormSchema),
  });

  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogout;

    return store.subscribe(() => {
      let prevWasLogout = currentWasLogout;
      currentWasLogout = store.getState().app.wasLogout;

      if (currentWasLogout !== prevWasLogout) {
        reset();
      }
    });
  }, []);

  const onSubmit = ({ login, password }) => {
    server.autorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }

      dispatch(setUserAction(res));
    });
  };

  const formError = errors.login?.message || errors.password?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <StyledAuthorization>
        <H2>Авторизация</H2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Логин"
            {...register('login', {
              onChange: () => setServerError(null),
            })}
          />
          <Input
            type="password"
            placeholder="Пароль"
            {...register('password', {
              onChange: () => setServerError(null),
            })}
          />
          <Button
            type="submit"
            height="33px"
            size="18px"
            disabled={!!formError}
          >
            Авторизироваться
          </Button>
          {errorMessage && <ErroMessage>{errorMessage}</ErroMessage>}
          <RegistrationLink to="/register">Регистрация</RegistrationLink>
        </form>
      </StyledAuthorization>
    </div>
  );
};
