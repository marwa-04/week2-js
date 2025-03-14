function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]; 
    }
    return sum;
}

const numbersArray = [1, 2, 2];
console.log(squareSum(numbersArray)); // Output=9
