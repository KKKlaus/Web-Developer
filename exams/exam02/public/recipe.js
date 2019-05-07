"use strict";
(function() {
	const newRecipeButton = document.querySelector('.homepageAdd button');
	const recipesList = document.querySelectorAll('.recipe')

	const errors = {
	  'network-error': 'Error talking to network',
	  'Recipe exists': 'Recipe already exists',
	  'Please Enter Recipe': 'Title is required',
	  default: 'Unknown error'
    };

	const pageWrap = function(content) {
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
	};
	const recipeDetailsPage = function(recipeDetail) {
	  return pageWrap(`
	  	<div class="recipe-details">
	      ${getRecipeDetails(recipeDetail)}
	  	</div>
	  	<form action="/return" class="return" method="GET">
	      <button class="returnHome">Return to Home</button>
        </form>
	  `);
	};
	const getRecipeDetails = function(recipeDetail) {
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
	};



	const NewRecipe = () => {
	  event.preventDefault();
	  fetch(`/newRecipe-client`)
      .then( response => {
        if( response.ok ) {
          return response.json();
        }
        throw Error(response.statusText);
      })
	  .then( data => {
	  	document.body.innerHTML = data.html;
	  	const returnButton = document.querySelector('.return button');
	  	returnButton.addEventListener('click', () => { returnHomePage() });
	  	const addButton = document.querySelector('.add button');
	  	addButton.addEventListener('click', () => { addRecipe() });
	  })
	};

	const returnHomePage = () => {
		event.preventDefault();
		const homePage = function(recipeList) {
		  return pageWrap(`
		    <div class="recipe-panel">
			  ${getRecipeList(recipeList)}
		    </div>
		    <form action="/newRecipe" class="homepageAdd" method="GET">
		  	  <button class="homepageAdd">New Recipe</button>
	        </form>
		  `);
		};

		const getRecipeList = function(recipeList) {
		  return `
			<ul class="recipes">
			  ${ Object.values(recipeList).map( formatRecipe ).join('') }
			</ul>
		  `;
	    };

	    const formatRecipe = function(recipe) {
		  return `
		    <li>
		      <div class="recipe">
		        <a href="/?recipeName=${recipe}" class="recipename">${recipe}</a>
		      </div>
		    </li>
		  `;
		};
		fetch(`/return-client`)
		.then(response => {
			if(response.ok) {
				return response.json();
			}
			throw Error(response.statusText);
		})
		.then(data => {
			const recipeList = data.recipes;
			document.body.innerHTML = homePage(recipeList);
			document.querySelector('.homepageAdd button').addEventListener('click', () => { NewRecipe()});
			const rList = document.querySelectorAll('.recipe');
			for(let i = 0; i < rList.length; i++){
				rList[i].addEventListener('click', () => { RecipeDetail(rList[i].innerText)});
			}
		})
	};

	const addRecipe = () => {
		event.preventDefault();
		const title = document.querySelector('.title').value;
		const ingredients = document.querySelector('.ingredients').value;
		const instructions = document.querySelector('.instructions').value;
		fetch(`/add-client`, {
		  method: 'POST',
		  headers: new Headers({
		    'content-type': 'application/json'
		  }),
		  body: JSON.stringify( { title, ingredients, instructions } )
		})
		.catch(err => {
			return Promise.reject({ error: 'network-error', message: 'network issue'});
		})
		.then(response => {
			if(response.ok) {
				const recipeDetail = {title, ingredients, instructions };
				document.body.innerHTML = recipeDetailsPage(recipeDetail);
				document.querySelector('.return button').addEventListener('click', () => { returnHomePage() });
			}
			return response.json().then( err => Promise.reject(err) );s
		})
		.catch( err => {
			if(document.querySelector('.ErrorMes')){
				const errElement = document.querySelector('.ErrorMes');
				errElement.parentElement.removeChild(errElement);
			}
			const errMes = document.createElement('p');
			errMes.className = "ErrorMes"; 
			errMes.innerText = errors[err.error] || errors.default;
			if(document.querySelector('.New-Recipe') != null){
				document.querySelector('.New-Recipe').appendChild(errMes);
			}
    	});
	};

	const RecipeDetail = (recipeName) => {
		event.preventDefault();
		fetch(`/detail-client`, {
			method: 'POST',
			headers: new Headers({
		    	'content-type': 'application/json'
		  	}),
		  	body: JSON.stringify( { recipeName } )
		})
		.then( response => {
	      if( response.ok ) {
	        return response.json();
	      }
	      throw Error(response.statusText);
	    })
	    .then( data => {
	    	document.body.innerHTML = recipeDetailsPage(data.recipeDetail);
	    	document.querySelector('.return button').addEventListener('click', () => { returnHomePage() });
	    })

	}

	if(newRecipeButton != null){
		newRecipeButton.addEventListener('click', () => { NewRecipe() });
	}

	if(recipesList != null){
		for(let i = 0; i < recipesList.length; i++){
			recipesList[i].addEventListener('click', () => { RecipeDetail()});
		}
	}

})();	