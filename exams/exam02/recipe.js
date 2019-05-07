const recipes = {};

const recipeDetails = [];

function addRecipe(recipeName) {
	recipes[recipeName] = recipeName
}

function addRecipeDetail({title, ingredients, instructions}) {
	recipeDetails.push({title, ingredients, instructions});
}

function getRecipeDetail(recipeName) {
	for(recipedetail of recipeDetails){
		if(recipedetail.title === recipeName){
			return recipedetail;
		}
	}
}

const recipeStorage = {
	recipes,
	recipeDetails,
	addRecipe,
	addRecipeDetail,
	getRecipeDetail
};

module.exports = recipeStorage;

