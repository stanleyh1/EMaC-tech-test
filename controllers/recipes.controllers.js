const { fetchRecipes, selectRecipeById, postRecipe } = require('../models/recipes.models')

  exports.getAllRecipes = (req, res) => {
    fetchRecipes((err, recipes) => {
      res.status(200).send(recipes);
    });
  };

  exports.getRecipeById = (req, res) => {
    const requestId = req.params.recipeId;
    selectRecipeById((err, recipes) => {
      const singleRecipeArray = recipes.filter(recipe => recipe.id === requestId )
      res.status(200).send(singleRecipeArray[0]);
    });
  };


  exports.addRecipe = (req,res) => {
    postRecipe((err, newRecipes) => {
      
      res.status(201).send(newRecipes)
    });
  };
