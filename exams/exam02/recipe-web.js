const recipeWeb = {
  pageWrap: function(content) {
    return `
      <!DOCTYPE html>
	  <html>
		<head>
			<link rel="stylesheet" href="/recipe.css">
			<title>Recipe Storage</title>
		</head>
		<body>
      <img class="RecipeImg" src="/RecipeStorage.png"/>
			<div id="recipe-app">
				${content}
			</div>
			<script src="/recipe.js"></script>
		</body>
	  </html>
    `;
  },
  homePage: function(recipeStorage) {
    return this.pageWrap(`
      <div class="recipe-panel">
		${this.getRecipeList(recipeStorage)}
      </div>
      ${this.homePageAddButton()}
    `);
  },
  recipeDetailsPage: function(recipeDetail) {
  	return this.pageWrap(`
  		<div class="recipe-details">
  			${this.getRecipeDetails(recipeDetail)}
  		</div>
  		${this.returnHomePage()}
  	`);
  },
  newRecipePage: function() { 
  	return this.pageWrap(`
		<div class="New-Recipe">
			${this.addNewRecipe()}
		</div>
		${this.returnHomePage()}
  	`);
  },
  formatRecipe: function(recipe) {
    return `
      <li>
        <div class="recipe">
          <a href="/?recipeName=${recipe}" class="recipename">${recipe}</a>
        </div>
      </li>
    `;
  },
  getRecipeList: function(recipeStorage) {
    return `
      <ul class="recipes">
        ${ Object.values(recipeStorage.recipes).map( this.formatRecipe ).join('') }
      </ul>
    `;
  },
  homePageAddButton: function() {
  	return `
	  <form action="/newRecipe" class="homepageAdd" method="GET">
		  <button class="homepageAdd">New Recipe</button>
	  </form>
  	`;
  },
  getRecipeDetails: function(recipeDetail) {
  	return `
       <div class="Details">
            <div class="detail-title">
              Titile: <span class="title">${recipeDetail.title}</span>
            </div>
            <div class="detail-ingredients">
              Ingredients: <span class="ingredients">${recipeDetail.ingredients}</span>
            </div>
            <div class="detail-instructions">
              Instructions: <span class="instructions">${recipeDetail.instructions}</span>
            </div>
       </div>
  	`;
  },
  addNewRecipe: function() {
  	return `
	  <div class="addRecipe">
  		<form action="/add" class="add" method="POST">
  			<input type="text" class="title" name="title" placeholder="Enter Title">
  			<input type="text" class="ingredients" name="ingredients" placeholder="Enter Ingredients">
  			<input type="text" class="instructions" name="instructions" placeholder="Enter Instructions">
  			<button class="add">Add</button>
  		</form>
	  </div>
  	`;
  },
  returnHomePage: function() {
  	return `
	  <form action="/return" class="return" method="GET">
		  <button class="returnHome">Return to Home</button>
	  </form>
  	`;
  }
};

module.exports = recipeWeb;