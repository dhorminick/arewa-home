export function genRand(length = 10) {
  const alphaNum =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += alphaNum.charAt(Math.floor(Math.random() * alphaNum.length));
  }
  return str;
}
