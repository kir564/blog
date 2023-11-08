import { transformSession } from '../transformers';

export const getSession = (hash) =>
  fetch(`http://localhost:3005/sessions?hash=${hash}`)
    .then((response) => response.json())
    .then(([loadedSession]) => loadedSession);
// .then(
//   ([loadedSession]) => loadedSession && transformSession(loadedSession)
// );
