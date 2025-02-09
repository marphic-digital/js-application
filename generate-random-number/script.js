const minValue = parseFloat(prompt('Enter a minimum value'));
const maxValue = parseFloat(prompt('Enter a maximum value'));

if(!isNaN(minValue) && !isNaN(maxValue) && maxValue > minValue){
    let randomNumber = Math.floor(Math.random() * (maxValue - minValue) + minValue);
    console.log(`A random number between ${minValue} and ${maxValue} is ${randomNumber}.`)
}else{
    console.log(`Please enter a valid number, ensuring that minimum value is less than maximum value.`)
}