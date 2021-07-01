const mongoose = require('mongoose');
const connection = "mongodb+srv://quantumkitty:Kalebkaelyn2!@cluster0.j2let.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log("Database Connected Successfully"))
  .catch(err => console.log(err));
