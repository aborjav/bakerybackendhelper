import { Sequelize } from 'sequelize';

// Initialize database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
});

// Import associations
import './models/associations';

export { sequelize };
