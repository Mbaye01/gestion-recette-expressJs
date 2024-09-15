onst express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.get("/recipes", recipeController.getAllRecipes);
router.post("/recipes", recipeController.createRecipe);
router.get("/recipes/:id", recipeController.getRecipeById);
router.put("/recipes/:id", recipeController.updateRecipe);
router.delete("/recipes/:id", recipeController.deleteRecipe);

module.exports = router;