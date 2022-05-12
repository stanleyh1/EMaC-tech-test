const apiRouter = require('express').Router();
const { getAllRecipes, getRecipeById, addRecipe } = require('../controllers/recipes.controllers')

apiRouter.get('/', (_, res) => {
  res.json({ message: 'ok' });
});

apiRouter.get('/recipes', getAllRecipes)
         .post('/recipes', addRecipe)
apiRouter.get('/recipes/:recipeId', getRecipeById)

module.exports = apiRouter;
