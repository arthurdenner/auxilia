const validateCPF = (strCPF = '') => {
  let sum, rest;

  sum = 0;

  if (!strCPF || strCPF.length !== 11) {
    return false;
  }

  for (let i = 1; i <= 9; i += 1) {
    sum += parseInt(strCPF.substring(i - 1, i), 0) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) {
    rest = 0;
  }

  if (rest !== parseInt(strCPF.substring(9, 10), 10)) {
    return false;
  }

  sum = 0;

  for (let i = 1; i <= 10; i += 1) {
    sum += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) {
    rest = 0;
  }

  if (rest !== parseInt(strCPF.substring(10, 11), 10)) {
    return false;
  }

  return true;
};

export default validateCPF;
