// Express
const express = require('express');
const app = express();

// Create OS independent path strings
const path = require('path');

// Access the file system for key.txt
const fs = require('fs');

// Give strings color, to hilight errors etc
// https://www.npmjs.com/package/chalk
const chalk = require('chalk');

// MongoDB Agent
const mongoose = require('mongoose');

// Returns the key synchronously
function getKey() {
    let keyPath = "key.txt";

    if (!fs.existsSync(keyPath)) {
        // adding colors to commandline https://nodejs.org/en/knowledge/command-line/how-to-get-colors-on-the-command-line/
        console.log(chalk.bgRed(`Key file not found! Please create ${path.join(__dirname, keyPath)}`));
        throw new Error("Key file not found");
    }
    let APIkey = fs.readFileSync(path.join(__dirname, keyPath), "utf8");
    const regex = RegExp('^(.){16}$');
    // Checks if key is 16 characters long
    if (regex.test(APIkey)) {
        return APIkey
    }
    else {
        console.log(chalk.bgRed(`The API key "${APIkey}" is not a valid key`));
        throw new Error("Invalid API key");
    }
}

// API Key
let AlphaVantageKey = getKey();

console.log(chalk.bgBlue.black(`Loaded key: "${AlphaVantageKey}"`));

// Loads API key
const alpha = require('alphavantage')({ key: AlphaVantageKey });

// serve static files (for CSS, pictures, etc)
app.use(express.static(path.join(__dirname, 'public')));

// Test API
app.get('/helloworld', (req, res) => res.send('Hello World!'));

// Display demo API data
app.get('/api/data/', (req, res) => {
    alpha.data.daily(`msft`).then(data => {
        res.send(alpha.util.polish(data));
    });
});

// Use host's port, (if we decide to deploy on a service like Heroku) 
// or, if not found, use the port 5000
const PORT = process.env.PORT || 5000;

// Bind port 5000 to Express
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
