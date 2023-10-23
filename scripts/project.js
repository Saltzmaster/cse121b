// Define a variable to store the recipes data
let recipes = [];

const categoryList = document.querySelector('#category-list');
const recipeList = document.querySelector('#recipe-list');
const searchInput = document.querySelector('#search-input');

// Fetch recipes data from an external JSON file
fetch('https://run.mocky.io/v3/a4ff8874-1f95-4144-b20a-186b24f12c52')
    .then(response => response.json())
    .then(data => {
        recipes = data;
        initialize();
    })
    .catch(error => console.error('Error fetching recipes:', error));

function initialize() {
    // Create an array of unique categories
    const categories = [...new Set(recipes.map(recipe => recipe.category))];

    // Display categories
    displayCategories(categories);

    // Display all recipes initially
    displayRecipes(recipes);

    // Event listener for searching
    searchInput.addEventListener('input', () => {
        filterRecipes();
    });

    // Event listener for category filtering
    categoryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const category = e.target.dataset.category;
            filterRecipes(category);
        }
    });
}

function displayCategories(categories) {
    categoryList.innerHTML = '';
    const categoryHTML = categories.map(category => `
        <li><a href="#" data-category="${category}">${category}</a></li>
    `).join('');
    categoryList.innerHTML = categoryHTML;
}

function displayRecipes(recipesToDisplay) {
    recipeList.innerHTML = '';
    const recipeHTML = recipesToDisplay.map(recipe => `
        <li>
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </li>
    `).join('');
    recipeList.innerHTML = recipeHTML;
}

function filterRecipes(category = '') {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        (category === '' || recipe.category === category) && (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
        ));
    displayRecipes(filteredRecipes);
}