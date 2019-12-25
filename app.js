const PORT = process.env.PORT || 3000;

const express = require("express")
const exphbr = require("express-handlebars")
const bodyParser = require("body-parser")
const session = require("express-session")

//Routes
const genRoutes = require('./routes/gen')
//Start Express
const app = express();

//Processes
require("dotenv").config({path:'./config/keys.env'});

//Handlebars
app.engine('handlebars', exphbr());
app.set('view engine', 'handlebars');

//Public Folder
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));

//Sessions
app.use(session({secret:process.env.SESSION_SECRET}));
app.use((req,res,next)=>{
    res.locals.user= req.session.userInfo;
    next();
})

//Routes go here
app.use('/', genRoutes);

app.get('/', (req,res)=>{
    res.render('general/missing')
})


//Start
app.listen(PORT, ()=>{
    console.log(`Now listening on port: ${PORT}`)
})