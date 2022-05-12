const supertest = require('supertest');
const server = require('../server');
const request = supertest(server);


test('/api', async () => {
  const { body } = await request.get('/api').expect(200);
  expect(body.message).toBe('ok');
})


describe("GET/api/recipes", () => {
  test("status: 200 returns an array of all recipes", () => {
    return request
      .get("/api/recipes")
      .expect(200)
      .then((recipes) => {
        expect(Array.isArray(recipes.body)).toEqual(true);
        recipes.body.forEach((recipe) => {
          expect(recipe).toMatchObject({
            id: expect.any(String),
            imageUrl: expect.any(String),
            instructions: expect.any(String),
            ingredients: expect.any(Array),
          });
        });
      });
    });
    test("status: 200 a recipe by recipe Id", () => {
      return request
        .get(`/api/recipes/recipe-59`)
        .expect(200)
        .then((res) => {
                  expect(typeof res.body).toBe("object");
                  expect(res.body).toEqual(
                    expect.objectContaining({
                      id: "recipe-59",
                      imageUrl: "http://www.images.com/18",
                      instructions: "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
                      ingredients: [
                          { name: "demerara sugar", "grams": 25 },
                          { name: "flax", "grams": 66 },
                          { name: "apple juice", "grams": 44 },
                          { name: "oat milk", "grams": 198 }
                          ]
                      })
                    );
            });
      });
});
describe("POST/api/recipes", () => {
  test("status: 201 returns a newly created recipe", () => {
    const recipe = {
      imageUrl: "http://www.images.com/200",
      instructions: "whizz in your blender for a healthy breakfast or snack",
      ingredients: [
        { name: "demerara sugar", "grams": 25 },
        { name: "banana", "grams": 66 },
        { name: "apple juice", "grams": 44 },
        { name: "oat milk", "grams": 198 }
      ]
    }
    return request
      .post("/api/recipes")
      .send(recipe)
      .expect(201)
      .then((res) => {
        expect(typeof res.body.recipeId).toBe("string");
        });
      });
  test("status 200 returns a newly posted recipe", () => {
    const recipe = {
      imageUrl: "http://www.images.com/200",
      instructions: "whizz in your blender for a healthy breakfast or snack",
      ingredients: [
        { name: "demerara sugar", "grams": 25 },
        { name: "banana", "grams": 66 },
        { name: "apple juice", "grams": 44 },
        { name: "oat milk", "grams": 198 }
      ]
    }
    return request
    .post("/api/recipes")
    .send(recipe)
    .then((res) => {
      const { recipeId } = res.body
      return request
      .get(`/api/recipes/${recipeId}`)
    })
    .then((res) => {
      expect(typeof res.body).toBe("object");
      expect(res.body).toEqual(
        expect.objectContaining(
          { 
            id: "recipe-200",
            imageUrl: "http://www.images.com/200",
            instructions: "whizz in your blender for a healthy breakfast or snack",
            ingredients: [
              { name: "demerara sugar", "grams": 25 },
              { name: "banana", "grams": 66 },
              { name: "apple juice", "grams": 44 },
              { name: "oat milk", "grams": 198 }
            ]
          }
        )
        )
      })
    })
})
