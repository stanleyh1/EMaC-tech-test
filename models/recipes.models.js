const fs = require("fs");

const filePath = "data/data.json"

exports.fetchRecipes = () => 
fs.promises.readFile(filePath, 'utf8')
    .then((recipeString) => {
      const parsedRecipes = JSON.parse(recipeString);
      return parsedRecipes
    })
    .catch((err) => {
      console.log(err)
    })


exports.selectRecipeById = () => 
  fs.promises.readFile(filePath, 'utf8').then((recipeString) => {
      const parsedRecipes = JSON.parse(recipeString);
      return parsedRecipes
    })
  .catch((err) => {
    console.log(err)
  })


exports.postRecipe = (newRecipe) => 
fs.promises.readFile(filePath, 'utf8').then((recipeString) => {
  const newId = 'recipe-200'
  const parsedRecipes = JSON.parse(recipeString);
  newRecipe.id = newId
  parsedRecipes.push(newRecipe)
  const newRecipesString = JSON.stringify(parsedRecipes)
  fs.writeFileSync (filePath, newRecipesString)
  console.log(newRecipe.id)
  return newRecipe.id
})
.catch((err) => {
  console.log(err)
})


