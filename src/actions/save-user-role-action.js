// import { ACTION_TYPE } from '.';

export const saveUserRoleAction = (user, selectedRoleId) => (dispatch) => {
  fetch(`http://localhost:3005/users?login=${user.login}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      ...user,
      roleId: selectedRoleId,
    }),
  })
    .then((data) => {
      return data.json();

      // dispatch({
      //   type: ACTION_TYPE.SAVE_USER_ROLE,
      //   payload: { userId: user.id, roleId: selectedRoleId },
      // });
    })
    .then((data) => console.log('data: ', data));
};
