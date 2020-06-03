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
  const greet = "Welcome to Mern";
  res.render("index", {
    greetMessage: greet,
  });
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
