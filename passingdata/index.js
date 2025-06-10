import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  let fname=req.body.fName
  let lname=req.body.lName
  console.log(fname,lname)
  let numberOfLetters = (fname+lname).length
  console.log(numberOfLetters)
  res.render('index.ejs',{namelength:numberOfLetters})
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
