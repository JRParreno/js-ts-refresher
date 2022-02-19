const fruits = ['Banna', 'Apple', 'Mango', 'Grapes'];

export const handleCalculate = (x: number, y: number) => {
    return x + y;
}

export const checkApple = (values: string[], handlePressCalculate: () => void) => {
    console.log(handlePressCalculate());
}

console.log(checkApple(fruits, () => handleCalculate(11, 20.35)));
