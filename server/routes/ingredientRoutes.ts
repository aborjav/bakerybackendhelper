import express from 'express';
import Ingredient from '../models/Ingredient';

const router = express.Router();

// Add a new ingredient
router.post('/', async (req, res) => {
    const { name } = req.body;
    const newIngredient = await Ingredient.create({ name });
    res.json(newIngredient);
});

export default router;
