export const isValidUsername = (username) => {
  let isValid;

  isValid = username.length >= 5;

  return isValid;
};

export const isValidPassword = (password) => {
  let isValid;

  const hasDigitInPassword = password.match(/\d/) !== null;
  const hasCapitalLetterInPassword = password.match(/[A-ZÁÉÍÓÚÜÑ]/) !== null;
  isValid =
    password.length >= 8 && hasDigitInPassword && hasCapitalLetterInPassword;

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  let isSame;

  isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  let isAdult;

  isAdult = age >= 18;

  return isAdult;
};
