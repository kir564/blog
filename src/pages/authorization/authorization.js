import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { server } from '../../bff';
import { Input, Button, H2, AuthError, AuthContainer } from '../../components';
import styled from 'styled-components';
import { setUserAction } from '../../actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constans';
import { useResetForm } from '../../hooks';
import { getErrorMessage } from '../../utils';

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

const RegistrationLink = styled(Link)`
  display: inline-block;
  text-decoration: underline;
  margin-top: 5px;
`;

export const Authorization = () => {
  const [serverError, setServerError] = useState(null);
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

  useResetForm(reset);

  const onSubmit = ({ login, password }) => {
    server.autorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }

      dispatch(setUserAction(res));
    });
  };

  const { errorMessage, formError } = getErrorMessage(errors, serverError);

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }

  return (
    <AuthContainer>
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
        <Button type="submit" height="33px" size="18px" disabled={!!formError}>
          Авторизироваться
        </Button>
        {errorMessage && <AuthError>{errorMessage}</AuthError>}
        <RegistrationLink to="/register">Регистрация</RegistrationLink>
      </form>
    </AuthContainer>
  );
};
