const express = require('express');
const app = express();
const PORT = 3000;

const recipeStorage = require('./recipe');
const recipeWeb = require('./recipe-web');

app.use(express.static('./public'));

app.get('/', (req, res) => {
  const { recipeName } = req.query;
  if( recipeName && recipeStorage.recipes[recipeName]) {
    const recipeDetail = recipeStorage.getRecipeDetail(recipeName);
    res.send( recipeWeb.recipeDetailsPage(recipeDetail));
  }
  else if( recipeName && !recipeStorage.recipes[recipeName]) {
    const errorPage = `No this Recipe!`;
    res.send(errorPage);
  }
  else{
    res.send(recipeWeb.homePage(recipeStorage));
  }
});

app.get('/newRecipe', (req, res) => {
  res.send(recipeWeb.newRecipePage());
});

app.get('/return', (req, res) => {
  res.redirect('/');
});

app.post('/add', express.urlencoded({ extended: false }), (req, res) => {
  const { title, ingredients, instructions} = req.body;
  if( title && recipeStorage.recipes[title]){
    const errorPage = `<div><span>Recipe already exists</span></div>`;
    res.send(errorPage + recipeWeb.newRecipePage());
  }
  else if(!title && !ingredients && !instructions){
    const errorPage = `<div><span>Please Enter Recipe</span></div>`;
    res.send(errorPage + recipeWeb.newRecipePage());
  }
  else{
    recipeStorage.addRecipe(title);
    recipeStorage.addRecipeDetail({title, ingredients, instructions});
    res.redirect(`/?recipeName=${title}`);
  }
});

app.get('/newRecipe-client', (req, res) => {
  res.json({html:recipeWeb.newRecipePage()});
});

app.get('/return-client', (req, res) => {
  res.json({recipes : recipeStorage.recipes})
});

app.post('/add-client', express.json(), (req, res) => {
  const { title, ingredients, instructions } = req.body;
  if( title && recipeStorage.recipes[title]){
    res.status(400).json({ error: 'Recipe exists', message: `'Title' property is required`});
    return;
  }
  else if(!title && !ingredients && !instructions){
    res.status(400).json({ error: 'Please Enter Recipe', message: `'Title' property is required`});
    return;
  }
  else{
    recipeStorage.addRecipe(title);
    recipeStorage.addRecipeDetail({title, ingredients, instructions});
    res.sendStatus(200);
  }
});

app.post('/detail-client', express.json(), (req, res) => {
  const { recipeName } = req.body;
  const recipeDetail = recipeStorage.getRecipeDetail(recipeName);
  res.json({ recipeDetail:recipeDetail });
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
