import express from 'express';
import { calculateMix } from './mixing';

const app = express(); 

app.get ('/',(req,res)=>{
    res.send('Hello world!');
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Define a new POST route for the mixing operation
app.post('/mix', (req, res) => {
    // Extract doughAmount and flourAmount from the request body
    const { doughAmount, flourAmount } = req.body;

    // Call the calculateMix function to calculate the required ingredients and times
    const result = calculateMix(doughAmount, flourAmount);

    // Send the result back to the client
    res.json(result);
});

// ... rest of your code

// Listen on a port
const port = 3001;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

