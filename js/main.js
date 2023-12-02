function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree === 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}

const number = 2;
const power = 3;
const result = pow(number, power);
console.log(`${number} elevation to a degree ${power} = ${result}`);
