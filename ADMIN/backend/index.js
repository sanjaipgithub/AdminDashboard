const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const FormDataModel = require("./models/FormData");
const AboutDataModel = require("./models/AboutData");
const TermsDataModel = require('./models/TermData');
const PrivacyDataModel = require('./models/PrivacyData');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Admin_page");

app.post("/register", (req, res) => {
  // To post / insert data into database

  const { email, password } = req.body;
  FormDataModel.findOne({ email: email }).then(user => {
    if (user) {
      res.json("Already registered");
    } else {
      FormDataModel.create(req.body)
        .then(log_reg_form => res.json(log_reg_form))
        .catch(err => res.json(err));
    }
  });
});

app.post("/login", (req, res) => {
  // To find record from the database
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email }).then(user => {
    if (user) {
      // If user found then these 2 cases
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Wrong password");
      }
    }
    // If user not found then
    else {
      res.json("No records found! ");
    }
  });
});



// ABOUT US


app.post("/api/saveEditorData", (req, res) => {
  const { editorData } = req.body;

  const newAboutData = new AboutDataModel({
    editorData
  });

  newAboutData
    .save()
    .then(() => res.json("Editor data saved successfully"))
    .catch(err => res.status(500).json("Error: " + err));
});

app.get("/api/getEditorData", async (req, res) => {
  try {
    const latestAboutData = await AboutDataModel.findOne()
      .sort({ _id: -1 })
      .limit(1);

    if (latestAboutData) {
      res.json({ editorData: latestAboutData.editorData });
    } else {
      res.json({ editorData: "" });
    }
  } catch (error) {
    console.error("Error fetching editor data:", error.message);
    res.status(500).json("Error: " + error.message);
  }
});





// TERMS

app.get('/api/getTermsData', async (req, res) => {
    try {
      const latestTermsData = await TermsDataModel.findOne()
        .sort({ _id: -1 })
        .limit(1);
  
      if (latestTermsData) {
        res.json({ editorData: latestTermsData.editorData });
      } else {
        res.json({ editorData: '' });
      }
    } catch (error) {
      console.error('Error fetching terms data:', error.message);
      res.status(500).json('Error: ' + error.message);
    }
  });
  
  app.post('/api/postTermsData', (req, res) => {
    const { editorData } = req.body;
  
    const newTermsData = new TermsDataModel({
      editorData,
    });
  
    newTermsData
      .save()
      .then(() => res.json('Terms data saved successfully'))
      .catch((err) => res.status(500).json('Error: ' + err));
  });
  

// PRIVACY

app.post('/api/postPrivacyData', (req, res) => {
    const { editorData } = req.body;
  
    const newPrivacyData = new PrivacyDataModel({
      editorData,
    });
  
    newPrivacyData
      .save()
      .then(() => res.json('Terms data saved successfully'))
      .catch((err) => res.status(500).json('Error: ' + err));
  });

  app.get('/api/getPrivacyData', async (req, res) => {
    try {
      const latestPrivacyData = await PrivacyDataModel.findOne()
        .sort({ _id: -1 })
        .limit(1);
  
      if (latestPrivacyData) {
        res.json({ editorData: latestPrivacyData.editorData });
      } else {
        res.json({ editorData: '' });
      }
    } catch (error) {
      console.error('Error fetching terms data:', error.message);
      res.status(500).json('Error: ' + error.message);
    }
  });

app.listen(3001, () => {
  console.log("Server listining on http://127.0.0.1:3001");
});
