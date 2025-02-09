const num1 = parseFloat(prompt("Please Enter Your First Number:"));
const num2 = parseFloat(prompt("Please Enter Your Second Number:"));

if(!isNaN(num1) && !isNaN(num2)){
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
}else{
    console.log("Please Enter Valid Numbers.")
}