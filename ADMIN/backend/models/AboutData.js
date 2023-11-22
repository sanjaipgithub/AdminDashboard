const mongoose = require('mongoose');

const AboutDataSchema = new mongoose.Schema({
  editorData: String,
});

const AboutDataModel = mongoose.model('AboutData', AboutDataSchema);

module.exports = AboutDataModel;
