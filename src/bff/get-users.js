export const getUsers = () =>
  fetch('http://localhost:3005/users').then((response) => response.json());
