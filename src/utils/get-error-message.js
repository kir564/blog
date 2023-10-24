export const getErrorMessage = (errors, serverError) => {
  const formError =
    errors.login?.message ||
    errors.password?.message ||
    errors.passcheck?.message;
  const errorMessage = formError || serverError;

  return { errorMessage, formError };
};
