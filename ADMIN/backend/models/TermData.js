// TermsData.js

const mongoose = require('mongoose');

const termsDataSchema = new mongoose.Schema({
  editorData: {
    type: String,
    required: true,
  },
});

const TermsDataModel = mongoose.model('TermsData', termsDataSchema);

module.exports = TermsDataModel;
