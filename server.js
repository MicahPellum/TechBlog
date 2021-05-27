//DEPENDENCIES
const express = require('express');
const sequelize = require('./config/connection');
const path = require("path");
const exphbs = require('express-handlebars');
const session = require("express-session");
const helpers = require('./utils/helpers');
const hbs =exphbs.create({ helpers });



// //Creates our express server
// const app = express();
// const port = 3000;


const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: { secure: false },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});


// // Sets Handlebars as the default template engine
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');


// //Serves static files (we need it to import a css file)
// app.use(express.static('public'))

// //Sets a basic route
// app.get('/', (req, res) => res.render('index'));

// //Makes the app listen to port 3000
// app.listen(port, () => console.log(`App listening to port ${port}`));