import Dough from './Dough';
import Ingredient from './Ingredient';
import Recipe from './Recipe';

// Define relationships
Dough.belongsToMany(Ingredient, { through: Recipe });
Ingredient.belongsToMany(Dough, { through: Recipe });
