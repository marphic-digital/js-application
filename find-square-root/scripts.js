const inputNumber = parseFloat(prompt('Please Enter a Valid Number:'));

if(!isNaN(inputNumber) && inputNumber >= 0) {
    const squareRoot = Math.sqrt(inputNumber);
    console.log(`The square root of ${inputNumber} is ${squareRoot}.`)
}else{
    console.log("Please Enter a Valid Number.");
}