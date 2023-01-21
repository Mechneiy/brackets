module.exports = function check(str, bracketsConfig) {
  let string = str.split("");
  for (let i = 0; i < str.length; i++) {
    bracketsConfig.map((index) => {
      if (index[1] === string[i] && index[0] === string[i - 1]) {
        string.splice(i - 1, 2);
        i = 0;
      }
    });
  }
  return !string.length;
};
