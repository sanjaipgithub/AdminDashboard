const mongoose = require('mongoose');

const privacyDataSchema = new mongoose.Schema({
  editorData: {
    type: String,
    required: true,
  },
});

const PrivacyDataModel = mongoose.model('PrivacyData', privacyDataSchema);

module.exports = PrivacyDataModel;
