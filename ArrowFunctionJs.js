const fruitsJs = ["Banna", "Apple", "Mango", "Grapes"];

const handleCalculateJs = (x, y) => {
  return x + y;
};

const checkAppleJs = (values, handlePressCalculate) => {
  console.log(handlePressCalculate());
};

console.log(checkAppleJs(fruitsJs, () => handleCalculateJs(11, 20.35)));
