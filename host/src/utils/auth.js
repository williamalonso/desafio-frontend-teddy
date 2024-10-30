// src/utils/auth.js
export const getAuthenticatedUser = () => {
  const cookieUser = document.cookie
    .split('; ')
    .find((row) => row.startsWith('user='))
    ?.split('=')[1];

  const localUser = localStorage.getItem('user');
  return cookieUser || localUser;
};