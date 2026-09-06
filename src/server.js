const { default: chalk } = require('chalk');
const express = require('express')

const app = express();

app.get("/hello", (req, res) => {
    res.json({message: "Hello World!"})
});

const PORT = 5002;

const server = app.listen(PORT, ()=> {
    console.log(chalk.blue(`Server running on PORT ${PORT}`));
    console.log(chalk.bold.blueBright(`http://localhost:${PORT}`));
})