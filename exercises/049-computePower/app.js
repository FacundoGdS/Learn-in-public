function computePower(num, exponent) {
  let result = num;
  for (let i = 0; i < exponent-1; i++){
    result = result * num
  };
  return result;
};

console.log(computePower(2,3));