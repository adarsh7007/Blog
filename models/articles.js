const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  title: { type: String ,
    // required:true

  },
  article: { type: String, 
    // required:true

  },
  authername: { type: String,
    // required:true

  },
  picture: { 
    
    type: String,
    
    // required:true, 
    
    // trim: true,
  
  
  },
 
});
const Articles = mongoose.model("Article", articleSchema);

module.exports = Articles;
