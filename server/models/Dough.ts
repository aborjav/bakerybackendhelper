import { DataTypes } from 'sequelize';
import { sequelize } from '../db'; 

const Dough = sequelize.define('Dough', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

export default Dough;
