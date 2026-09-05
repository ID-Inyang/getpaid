const { default: chalk } = require('chalk');
const express = require('express')

const app = express();

const PORT = 5002;

const server = app.listen(PORT, ()=> {
    console.log(chalk.green(`Server running on PORT ${PORT}`));
    console.log(chalk.bold('The drop'))
})