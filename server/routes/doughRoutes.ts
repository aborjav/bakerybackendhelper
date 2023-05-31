import express from 'express';
import Dough from '../models/Dough';
import Ingredient from '../models/Ingredient';

const router = express.Router();

// Add a new dough type
router.post('/', async (req, res) => {
    const { name } = req.body;
    const newDough = await Dough.create({ name });
    res.json(newDough);
});

// Fetch all dough types (with their ingredients)
router.get('/', async (req, res) => {
    const doughs = await Dough.findAll({ include: Ingredient });
    res.json(doughs);
});

// Fetch a specific dough type (with its ingredients)
router.get('/:doughId', async (req, res) => {
    const { doughId } = req.params;
    const dough = await Dough.findByPk(doughId, { include: Ingredient });
    res.json(dough);
});

export default router;
