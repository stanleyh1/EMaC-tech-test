const { fetchRecipes, selectRecipeById, postRecipe } = require('../models/recipes.models')

  exports.getAllRecipes = (req, res) => {
    fetchRecipes().then((recipes) => {
      res.status(200).send(recipes)
    })
    .catch((err) => {
      console.log(err)
    })
  };

  exports.getRecipeById = (req, res) => {
    const requestId = req.params.recipeId;
    selectRecipeById().then((recipes) => {
      const singleRecipeArray = recipes.filter(recipe => recipe.id === requestId )
        res.status(200).send(singleRecipeArray[0]);
    })
    .catch((err) => {
      console.log(err)
    })
  };


  exports.addRecipe = (req,res) => {
    const newRecipe = req.body
    postRecipe(newRecipe).then((recipeId) => {
      res.status(201).send({recipeId})
    })
    .catch((err) => {
      console.log(err)
    })
  };
