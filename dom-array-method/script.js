// const main = document.getElementById('main');
// const addUserBtn = document.getElementById('add-user');
// const doubleBtn = document.getElementById('double');
// const showMillionairesBtn = document.getElementById('show-millionaires');
// const sortBtn = document.getElementById('sort');
// const calculateWealthBtn = document.getElementById('calculate-wealth');

// let data = [];

// getRandomUser();
// getRandomUser();
// getRandomUser();

// // Fetch random user and add money
// async function getRandomUser() {
//   const res = await fetch('https://randomuser.me/api');
//   const data = await res.json();

//   const user = data.results[0];

//   const newUser = {
//     name: `${user.name.first} ${user.name.last}`,
//     money: Math.floor(Math.random() * 1000000)
//   };

//   addData(newUser);
// }

// // Double eveyones money
// function doubleMoney() {
//   data = data.map(user => {
//     return { ...user, money: user.money * 2 };
//   });

//   updateDOM();
// }

// // Sort users by richest
// function sortByRichest() {
//   console.log(123);
//   data.sort((a, b) => b.money - a.money);

//   updateDOM();
// }

// // Filter only millionaires
// function showMillionaires() {
//   data = data.filter(user => user.money > 1000000);

//   updateDOM();
// }

// // Calculate the total wealth
// function calculateWealth() {
//   const wealth = data.reduce((acc, user) => (acc += user.money), 0);

//   const wealthEl = document.createElement('div');
//   wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
//     wealth
//   )}</strong></h3>`;
//   main.appendChild(wealthEl);
// }

// // Add new obj to data arr
// function addData(obj) {
//   data.push(obj);

//   updateDOM();
// }

// // Update DOM
// function updateDOM(providedData = data) {
//   // Clear main div
//   main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

//   providedData.forEach(item => {
//     const element = document.createElement('div');
//     element.classList.add('person');
//     element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
//       item.money
//     )}`;
//     main.appendChild(element);
//   });
// }

// // Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
// function formatMoney(number) {
//   return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
// }

// // Event listeners
// addUserBtn.addEventListener('click', getRandomUser);
// doubleBtn.addEventListener('click', doubleMoney);
// sortBtn.addEventListener('click', sortByRichest);
// showMillionairesBtn.addEventListener('click', showMillionaires);
// calculateWealthBtn.addEventListener('click', calculateWealth);


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

async function getRandomUser(){
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  const user = data.results[0];

  const userData = {
    name: `${user.name.title} ${user.name.first} ${user.name.last}`,
    contact: `${user.cell}`,
    country: `${user.location.country}`,
    money: Math.floor(Math.random() * 1000000)
  }
  
  addData(userData);
  
}

function addData(obj){
  data.push(obj);

  updateDOM();
}
// DOUBLE MONEY MAP() METHOD
function doubleMoney(){
  data = data.map(item => {
    // return {...item, money: item.money * 2}
    return {name: item.name, money: item.money * 2}
  })
  updateDOM();
}
// UPDATE DOM
function updateDOM(providedData = data) {
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  })
};

// FORMATE MONEY
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

//SORT ARRAY SORT() METHOD
function sortByRichest(){
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}
// SHOW MILLIONAIRES
function showMillionaires(){
  data = data.filter(user => user.money > 1000000);
  updateDOM();
}

// CALCULATE WEALTH
function calculateWealth(){
  const wealth = data.reduce((acc, cur) => (acc += cur.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
  main.appendChild(wealthEl);
}

// ADD ENVENT LISTENER
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth)