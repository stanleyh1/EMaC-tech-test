const apiRouter = require('express').Router();
const { getAllRecipes, getRecipeById } = require('../controllers/recipes.controllers')

apiRouter.get('/', (_, res) => {
  res.json({ message: 'ok' });
});

apiRouter.get('/recipes', getAllRecipes)
apiRouter.get('/recipes/:recipeId', getRecipeById)

module.exports = apiRouter;
