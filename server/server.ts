import express from 'express';
import { sequelize } from './db'; 
import routes from './routes'; // Import your routes

const app = express();
app.use(express.json());
app.use('/api', routes); // Use your routes

const port = 3001;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

sequelize.sync();
