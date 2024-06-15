export const checkCredentials = (username, password) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  let areValidCredentials;

  const isValidUsername = username === storedUsername;
  const isValidPassword = password === storedPassword;

  areValidCredentials = isValidUsername && isValidPassword;

  return areValidCredentials;
};
