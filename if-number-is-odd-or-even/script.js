const inputNumber = parseFloat(prompt('Enter a number'));

if(!isNaN(inputNumber) && Number.isInteger(inputNumber)){
    if(inputNumber % 2 === 0){
        console.log(`${inputNumber} is an even number.`);
    }else if(inputNumber % 2 !== 0){
        console.log(`${inputNumber} is an odd number.`);
    }else{
        console.log(`Please enter a valid integer.`);
    }
}