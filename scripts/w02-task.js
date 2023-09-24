/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Ty Saltzgiver";
let currentYear = new Date().getFullYear();
let profilePicture = 'images/myPicture.jpeg';


/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;



/* Step 5 - Array */

let imageElement = document.querySelector('image');



imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', profilepicture); 
imageElement.setAttribute('title', profilePicture);

let favoriteFood = ['pizza','chicken', 'rice', 'chocolate']; 
let anotherFavoriteFood = 'cup bop';

for (let i = 0; i < favoriteFoods.length; i++) 
    {
        foodElement.innerHTML += `${favoriteFoods[i]}`;
    }
    foodElement.innerHTML += '<br>';




    