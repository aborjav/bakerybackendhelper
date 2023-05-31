import { DataTypes } from 'sequelize';
import { sequelize } from '../db'; 

const Recipe = sequelize.define('Recipe', {
    quantity: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    timestamps: false
});

export default Recipe;
