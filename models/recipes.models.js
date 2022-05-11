const fs = require("fs");

const filePath = "data/data.json"

exports.fetchRecipes = (callback) => {
  fs.readFile(filePath, 'utf8', (err, recipeString) => {
    if (err) console.log(err);
    else {
      const parsedRecipe = JSON.parse(recipeString);
      callback(null, parsedRecipe);
    }
  });
};

exports.selectRecipeById = (callback) => {
  fs.readFile(filePath, 'utf8', (err, recipeString) => {
    if (err) console.log(err);
    else {
      const parsedRecipe = JSON.parse(recipeString);
      callback(null, parsedRecipe);
    }
  });
};
