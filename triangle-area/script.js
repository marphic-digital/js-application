const base = parseFloat(prompt("Please Enter the base of a triangle."));
const height = parseFloat(prompt("Please Enter the height of a triangle."));

if(!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
    let area = .5* base * height;
    console.log(`The area of the triangle with ${base} and ${height} is ${area}.`);
}else{
    console.log("Please enter a positive number for base and height.")
}