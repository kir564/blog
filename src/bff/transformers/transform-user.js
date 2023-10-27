export const transformUser = (user) => ({
  id: user.id,
  login: user.login,
  registredAt: user.registred_at,
  roleId: user.role_id,
  password: user.password,
});
