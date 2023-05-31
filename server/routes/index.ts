import express from 'express';
import Dough from '../models/Dough';
import Ingredient from '../models/Ingredient';
import Recipe from '../models/Recipe';


const router = express.Router();

router.use('/doughs', doughRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/recipes', recipeRoutes);

export default router;
