const fs = require("fs");

const filePath = "data/data.json"

exports.fetchRecipes = (callback) => {
  fs.readFile(filePath, 'utf8', (err, recipeString) => {
    if (err) console.log(err);
    else {
      const parsedRecipes = JSON.parse(recipeString);
      callback(null, parsedRecipes);
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

exports.postRecipe = (callback) => {
  
  fs.appendFile(filePath,'utf8', newRecipe, (err) => {
    if(err) {
      console.log(err)
    }
    else {
      console.log(newRecipe)
      fs.readFile(filePath, 'utf8', (err, recipeString) => {
        if (err) {
          console.log(err)
        }
        else {
          const parsedRecipes = JSON.parse(recipeString);
          callback(null, parsedRecipes)
        }
      })
    }
  })
}
