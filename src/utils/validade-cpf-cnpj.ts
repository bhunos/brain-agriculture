export const validateCpfCnpj = (value: string): boolean => {
  value = value.replace(/[^\d]/g, '');

  if (value.length === 11) {
    const sequenceNumbers = /^\d{11}$/.test(value.replace(/(\d)\1{10}/, ''));
    if (!sequenceNumbers) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(value.charAt(i)) * (10 - i);
    }
    let primaryDigit = 11 - (sum % 11);
    primaryDigit = primaryDigit > 9 ? 0 : primaryDigit;

    if (parseInt(value.charAt(9)) !== primaryDigit) {
      return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(value.charAt(i)) * (11 - i);
    }
    let secondDigit = 11 - (sum % 11);
    secondDigit = secondDigit > 9 ? 0 : secondDigit;

    return parseInt(value.charAt(10)) === secondDigit;
  } else if (value.length === 14) {
    let sum = 0;
    let factor = 5;

    for (let i = 0; i < 12; i++) {
      sum += parseInt(value.charAt(i)) * factor;
      factor = factor === 2 ? 9 : factor - 1;
    }

    let primaryDigit = 11 - (sum % 11);
    primaryDigit = primaryDigit > 9 ? 0 : primaryDigit;

    if (parseInt(value.charAt(12)) !== primaryDigit) {
      return false;
    }

    sum = 0;
    factor = 6;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(value.charAt(i)) * factor;
      factor = factor === 2 ? 9 : factor - 1;
    }

    let secondDigit = 11 - (sum % 11);
    secondDigit = secondDigit > 9 ? 0 : secondDigit;

    return parseInt(value.charAt(13)) === secondDigit;
  }

  return false;
};
