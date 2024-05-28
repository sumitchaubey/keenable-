const express = require("express");
const fs = require("fs");
const path = require("path");
const port = 3333;
const multer = require('multer');

const db=require('./config/mongoose');
const Apply = require('./models/apply');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
app.use(express.static('./public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/program", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/program.html"));
});

app.get("/overview_program", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/overview_program.html"));
});

app.get("/aboutUs", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/contactUs", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/contact.html"));
});

app.get("/applyNow", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/apply.html"));
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload') // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename the file to avoid conflicts
  }
});

const upload = multer({ storage: storage });
app.post("/applyNow",upload.single('upload'), function(req, res) {
  const newApply = new Apply({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    education: req.body.education,
    address: req.body.address,
    city: req.body.city,
    pincode: req.body.pincode,
    date: req.body.date,
    upload:req.file.path
  });

  newApply.save()
    .then(() => {
      res.json({ message: "Application submitted successfully!" });
    })
    .catch(error => {
      console.error("Error:", error);
      res.status(500).json({ error: "An error occurred while submitting the application." });
    });
});

app.listen(port, function(err) {
  if (err){
    console.log('Error in runnig the server',err);
  }
  console.log(`Keen&Able Intern wesite is listening on port ${port}`);
});

