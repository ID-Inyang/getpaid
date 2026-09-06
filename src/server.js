import chalk from "chalk";
import express from "express"

// Import Routes
import movieRoutes from './routes/movieRoute.js';

const app = express();

// API Routes
app.use("/movies", movieRoutes)


const PORT = 5002;

const server = app.listen(PORT, ()=> {
    console.log(chalk.blue(`Server running on PORT ${PORT}`));
    console.log(chalk.bold.blueBright(`http://localhost:${PORT}`));
})