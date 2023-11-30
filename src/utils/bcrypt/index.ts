const bcrypt = require("bcrypt");

export function hashPass(password: string) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

export function isSamePass(unHashPass: string, hashPass: string) {
  return bcrypt.compareSync(unHashPass, hashPass);
}
