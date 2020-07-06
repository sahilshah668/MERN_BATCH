// editor link
// https://ckeditor.com/docs/ckeditor5/latest/examples/builds/inline-editor.html

const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport')
// const Handlebars = require("handlebars");
// const methodOverride = require("method-override");
const session = require('express-session')
const cookieParser = require('cookie-parser')
// const flash = require('express-flash')

// const {
//   allowInsecurePrototypeAccess,
// } = require("@handlebars/allow-prototype-access");

// how to use middleware
// app.use((req,res,next) => {
//     req.greetings = "hello"
//     return next()
// })
const Keys = require("./config/keys");
mongoose
  .connect(Keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

//requiring mongoose model



//cookie parser
app.use(cookieParser())

//session

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))

//initializinf passport 

require('./config/passport')(passport)


app.use(passport.initialize());
app.use(passport.session());



//template setup
app.engine("handlebars", exphbs());


app.set("view engine", "handlebars");

//body parser setup

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//global variable
app.use((req,res,next) => {
  res.locals.user =  req.user || null
  next()
})


//method overirde
// app.use(methodOverride("_method"));

const Auth = require("./routes/Auth");
const Content = require('./routes/Content')
const Profile = require('./routes/Profile')
app.use("/", Auth,Content,Profile);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
});
