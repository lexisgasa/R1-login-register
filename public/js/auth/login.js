export const checkCredentials = (username, password) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  const isValidUsername = username === storedUsername;
  const isValidPassword = password === storedPassword;

  const areValidCredentials = isValidUsername && isValidPassword;

  return areValidCredentials;
};
