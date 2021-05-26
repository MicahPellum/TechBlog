//DEPENDENCIES
const express = require('express');
const Sequelize = require('sequelize');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv')


//Creates our express server
const app = express();
const port = 3000;



// Sets Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//Serves static files (we need it to import a css file)
app.use(express.static('public'))

//Sets a basic route
app.get('/', (req, res) => res.render('index'));

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));