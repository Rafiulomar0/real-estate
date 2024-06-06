const passValidate = (password) => {
  let upper = false;
  let lower = false;
  let len = password.length >= 6;

  for (let i = 0; i < password.length; i++) {
    const element = password[i];
    if (element >= "a" && element <= "z") lower = true;
    if (element >= "A" && element <= "Z") upper = true;
  }

  if (!upper) return 1;
  else if (!lower) return 2;
  else if (!len) return 3;
  else return 0;
};

export default passValidate;
