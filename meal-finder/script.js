'use strict';

const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const meals = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const singleMeal = document.getElementById('singleMeal');


async function searchMeal(e) {
    e.preventDefault();
    const term = search.value;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    const data = await res.json();

    resultHeading.innerHTML = `<h2>Search result for '${term}':</h2>`;

    if(data.meals === null){
        resultHeading.innerHTML = `<p class="result-heading">There are no search results. Please try again!</p>`
    }else{
        meals.innerHTML = data.meals.map(meal => 
           ` 
           <div class='meal'>
           <img src='${meal.strMealThumb}' alt='${meal.strMeal}'/>
           <div class='meal-info data-mealID='${meal.idMeal}'>
           <h3>${meal.strMeal}</h3>
           </div>
           </div>
           `
        )
        .join('');
    }
    console.log(data);
    
}

// Event Listeners
submit.addEventListener('submit', searchMeal)