const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pictureSchema = new Schema({
  picture: { 
    
    type: String,
    
    // required:true, 
    
    // trim: true,
  
  
  },
 
});
const Picutre = mongoose.model("Picutre", pictureSchema);

module.exports = Picutre;
