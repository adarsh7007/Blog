const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://abc:vSPPfB5ZfXQqXA0w@cluster0.ezags.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
, (err) => {
    if (!err) {
        console.log('db connect')
    } else {
        console.log('not connect')
    }
})
module.exports = mongoose;
