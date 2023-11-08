export const transformSession = (session) => ({
  hash: session.hash,
  user: {
    login: session.user.login,
    id: session.user.id,
    registeredAt: session.user.registeredAt,
    roleId: session.user.roleId,
  },
  id: session.id,
});
