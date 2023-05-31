import { DataTypes } from 'sequelize';
import { sequelize } from '../db'; 

const Ingredient = sequelize.define('Ingredient', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

export default Ingredient;
