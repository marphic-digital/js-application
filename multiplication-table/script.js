const number = parseInt(prompt('Enter a number for multiplication table.'));

if(!isNaN(number) && Number.isInteger(number)){
    const range = 10;
    for(let i = 1; i <= range; i++){
        let table = number * i;
        console.log(`${number} * ${i} = ${table}`)
    }
}else {
    console.log(`Enter a valid number;`)
}