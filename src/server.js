import express from 'express';
import chalk from 'chalk';
import { config } from 'dotenv';

import { connectDB, disconnectDB } from './config/db.js';

// Load environment variables
config();
connectDB(); 

// Import routes
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';
import watchlistRoutes from './routes/watchlistRoutes.js'

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/movies', movieRoutes);
app.use('/auth', authRoutes);
app.use('/watchlist', watchlistRoutes);

const server = app.listen(PORT, () => {
    console.log(chalk.bgBlueBright(` Server is running on http://localhost:${PORT} `));
});
// Handle unhandled promise rejections (e.g., database connection issues)
process.on('unhandledRejection', (reason, promise) => {
    console.error(chalk.red(`Unhandled Rejection at: ${promise}, reason: ${reason.message}`));
    // Close the database connection
    server.close( async () => {
    await disconnectDB();
    process.exit(1);
    })
});

// Handle uncaught exceptions (e.g., programming errors)
process.on('uncaughtException', (error) => {
    console.error(chalk.red(`Uncaught Exception: ${error.message}`));
    // Close the database connection
    server.close( async () => {
    await disconnectDB();
    process.exit(1);
    })
});

// Gracefully handle termination signals (e.g., Ctrl+C)
process.on('SIGINT', async () => {
    console.log(chalk.yellow('Received SIGINT. Closing server and disconnecting from DB...'));
    server.close( async () => {
        await disconnectDB();
        process.exit(0);
    })
});