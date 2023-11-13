import { useSelector } from 'react-redux';
import { ERROR } from '../../constans';
import { selectUserRole } from '../../selectors';
import { Error } from '../error/error';
import { checkAccess } from '../../utils';

export const PrivateContent = ({
  children,
  serverError = null,
  access = [],
}) => {
  const userRole = useSelector(selectUserRole);

  const accessError = checkAccess(access, userRole)
    ? null
    : ERROR.ACCESS_DENIED;

  const error = serverError ? serverError : accessError;

  return error ? <Error error={error} /> : children;
};
