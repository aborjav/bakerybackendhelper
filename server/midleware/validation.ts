import { Request, Response, NextFunction } from 'express';

export function validateDoughInput(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    if (!name || typeof name !== 'string') {
        res.status(400).json({ error: 'Invalid dough input' });
    } else {
        next();
    }
}

export function validateIngredientInput(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    if (!name || typeof name !== 'string') {
        res.status(400).json({ error: 'Invalid ingredient input' });
    } else {
        next();
    }
}

export function validateRecipeInput(req: Request, res: Response, next: NextFunction) {
    const { doughId, ingredientId, quantity } = req.body;
    if (!doughId || !ingredientId || !quantity || typeof quantity !== 'number') {
        res.status(400).json({ error: 'Invalid recipe input' });
    } else {
        next();
    }
}
