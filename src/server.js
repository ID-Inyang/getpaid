import express from 'express';
import chalk from 'chalk';
import { config } from 'dotenv';

// Load environment variables
config();

// Import routes
import movieRoutes from './routes/movieRoutes.js';

const app = express();
const PORT = 3000;

app.use('/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(chalk.green(`Server is running on http://localhost:${PORT}`));
});