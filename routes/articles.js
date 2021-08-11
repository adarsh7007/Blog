const express = require("express");
const router = express.Router();
const path =require('path')
// const multer = require("multer");

// var upload = multer({ dest: 'uploads/' })

// const { v4: uuidv4 } = require('uuid');

const Articles = require("../models/articles");
const Picutre = require("../models/picture");


// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, '/../client/src/image');
//     },
//     filename: function(req, file, cb) {
//         cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// let upload = multer({ storage, fileFilter });
const multer = require("multer");
const upload = multer({ dest: "./public/data/uploads/" });
router.post("/add", upload.single('picture'),(req, res) => {
console.log(req.file)

console.log('hit ')
//   const newPicutre = new Picutre({
//     picture:req.file
//   });
// newPicutre.save()
//     .then(() => res.json("Pic Added"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
// router.post("/add",(req, res) => {
//   console.log(req.body)

console.log('hit ')
  const newUser = new Articles({
    title:req.body.title,
    authername:req.body.authername,
    article:req.body.article,
    picture:req.file

  });
newUser.save()
    .then(() => res.json( "User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.get("/article", (req, res, next) => {
  console.log("get hit");
  Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).res.json("err", err));
});

// router.post("/add", upload.single("file"), (req, res) => {
//   console.log("post hit");
// console.log(req.files
//   )
//   const newArticle = new Articles({
//     title: req.body.title,
//     article: req.body.article,
//     authername: req.body.authername,
//     file: req.files,
//   });
//   newArticle
//     .save()

//     .then(() => res.json(newArticle))
//     .catch((err) => res.status(400));
// });
//findby id
router.get("/article/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(err));
});

//put
router.put("/update/:id", upload.single("articleImage"), (req, res) => {
  // router.put("/update/:id",(req,res)=>{

  Articles.findById(req.params.id)
    .then((article) => {
      article.title = req.body.title;
      article.article = req.body.article;
      article.authername = req.body.authername;
      article.articleImage = req.file.orignalname;

      article
        .save()
        .then(() => res.json("updated"))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});
//delete
router.delete("/:id", (req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted"))
    .catch((err) => res.status(400).json(err));
});

module.exports = {
  routes: router,
};
