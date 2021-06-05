const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members')

const app = express();

// init middleware
// app.use(logger);


// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.get('/', (req,res) => res.render('index' ,{
    title: "Member App",
    members
}));

// Set Static fold
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/members', require('./routes/members'))

const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
