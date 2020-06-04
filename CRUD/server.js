const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const port = 5000;

// how to use middleware
// app.use((req,res,next) => {
//     req.greetings = "hello"
//     return next()
// })

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const greet = "Welcome to CRUD application";
  //render method is used to render the handlebars template first parameter
  //  will be the name of the template file and second paramter you can send the data from server (like  greet) 
  res.render("index", {
    greetMessage: greet,
  });
});

app.get("/about", (req, res) => {
  res.render("about")
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
