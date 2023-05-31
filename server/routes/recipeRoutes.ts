import express from 'express';
import Recipe from '../models/Recipe';

const router = express.Router();

// Add an ingredient to a dough type (i.e., create a recipe)
router.post('/:doughId/ingredients', async (req, res) => {
    const { doughId } = req.params;
    const { ingredientId, quantity } = req.body;
    const newRecipe = await Recipe.create({ doughId, ingredientId, quantity });
    res.json(newRecipe);
});

// Update an ingredient in a dough type (i.e., update a recipe)
router.patch('/:doughId/ingredients/:ingredientId', async (req, res) => {
    const { doughId, ingredientId } = req.params;
    const { quantity } = req.body;
    await Recipe.update({ quantity }, { where: { doughId, ingredientId } });
    res.json({ message: 'Updated successfully' });
});

// Remove an ingredient from a dough type (i.e., delete a recipe)
router.delete('/:doughId/ingredients/:ingredientId', async (req, res) => {
    const { doughId, ingredientId } = req.params;
    await Recipe.destroy({ where: { doughId, ingredientId } });
    res.json({ message: 'Deleted successfully' });
});

export default router;
