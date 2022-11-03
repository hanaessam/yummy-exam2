// Toggling the sidenav bar
$(".sidebarBtn").click(function () {
  $(".nav-sections").toggleClass("active");
  $(".nav-slider").toggleClass("non-active");
});

// Toggle Hamburger Icon
function toggleHamburger(icon) {
  icon.classList.toggle("fa-xmark");
}

// Loading Screen
window.addEventListener("load", function () {
  $(".loading-screen").fadeOut(1000);
});

// Display at start meals
let usMeal = [];
async function getAmericanMeals() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=american"
  );
  let result = await response.json();
  usMeal = result.meals;
  displayUSMeals();
}

getAmericanMeals();
var html = "";
function displayUSMeals() {
  for (let i = 0; i < usMeal.length; i++) {
    html += `<div class="col-3">
    <div class="meal-card">
    <img src="${usMeal[i].strMealThumb}" alt="meal" class="w-100">
        <div class="meal-card-layer">
          <p>${usMeal[i].strMeal}</p>
        </div>
    </div>
  </div>`;
  }
  document.querySelector(".myRow").innerHTML = html;
}

// Getting meals in search
let searchedMeal = document.querySelector(".search-bar");

let searchMeals = [];
async function getMeals(mealName) {
  let meal = await fetch(
    `www.themealdb.com/api/json/v1/1/list.php?i=${mealName}`
  );
  meal = await meal.json();
  searchMeals = meal.meals;
  console.log(searchMeals);
  displayMeals();
}
// function searchMeal(){
// //  getMeals("rice")
// }
function displayMeals() {
  for (let i = 0; i < searchMeals.length; i++) {
    html += `<div class="col-3">
    <div class="meal-card">
    <img src="${searchMeals[i].strMealThumb}" alt="meal" class="w-100">
        <div class="meal-card-layer">
          <p>${searchMeals[i].strMeal}</p>
        </div>
    </div>
  </div>`;
  }
  document.querySelector(".search-row").innerHTML = html;
}

//Categories
let allCategories = [];
let categoryName;
async function getCategories() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let result = await response.json();
  allCategories = result.categories;
  displayCategories();
}
getCategories();
var categoriesTemp = "";
function displayCategories() {
  for (let i = 0; i < allCategories.length; i++) {
    categoriesTemp += `<div class="col-lg-3 col-sm-6">
    <div class="category-card">
        <img src="${allCategories[i].strCategoryThumb}" class="w-100" alt="">
        <div class="category-card-layer">
            <p class="m-0">${allCategories[i].strCategory}</p>
            <p class="desc-text">
            ${allCategories[i].strCategoryDescription}
            </p>
        </div>
    </div>
    </div>`;
    categoryName = allCategories[i].strCategory;
  }
  document.querySelector(".categoriesRow").innerHTML = categoriesTemp;
}

//Filter Category
// let allFilterCategories = [];
// async function filterCategories(category){
//   const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
//   let result = await response.json();
//   allFilterCategories = result.meals;
//   displayCateMeals();
// }

// function displayCateMeals() {
//   for (let i = 0; i < allFilterCategories.length; i++) {
//     categoriesTemp += `<div class="col-lg-3 col-sm-6">
//     <div class="category-card">
//         <img src="${allFilterCategories[i].strMealThumb}" class="w-100" alt="">
//         <div class="category-card-layer">
//             <p class="m-0">${allFilterCategories[i].strMeal}</p>
//         </div>
//     </div>
//     </div>`;

//   }
//   document.querySelector(".filtered").innerHTML = categoriesTemp;
// }

//Area
let allAreas = [];
async function getAreas() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  let result = await response.json();
  allAreas = result.meals;
  displayAreas();
}
getAreas();
var areasTemp = "";
function displayAreas() {
  for (let i = 0; i < allAreas.length; i++) {
    areasTemp += ` <div class="col-lg-3 col-sm-6">
    <div class="area-card">
        <i class="fa-solid fa-city fa-3x"></i>
        <p>${allAreas[i].strArea}</p>
    </div>
</div>`;
  }
  document.querySelector(".areaRow").innerHTML = areasTemp;
}


//Ingredients

let allIngredients = [];
async function getIngredients() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let result = await response.json();
  allIngredients = result.meals;
  displayIngredients();
}
getIngredients();
var ingredientsTemp = "";
function displayIngredients() {
  for (let i = 0; i < allIngredients.length; i++) {
    ingredientsTemp +=  `<div class="col-lg-3 col-sm-6">
    <div class="ingredients-card">
        <i class="fa-solid fa-bowl-food fa-3x"></i>
        <p>${allIngredients[i].strIngredient}</p>
        <div class="ing-desc">${allIngredients[i].strDescription != null? allIngredients[i].strDescription : ""}</div>
    </div>
    </div>`;
  }
  document.querySelector(".ingerRow").innerHTML = ingredientsTemp;
}
