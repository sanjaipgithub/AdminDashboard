// About.js
import React, { useState, useEffect } from 'react';
import RichTextEditor from './RichTextEditor';
import './About.css';
import axios from 'axios';
import { Link } from "react-router-dom";


const About = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editorData, setEditorData] = useState('');

  const handleEditorChange = (data) => {
    setEditorData(data);
  };

  const handleSave = async () => {
    try {
      // Make a POST request to save the CKEditor data to the backend
      await axios.post('http://localhost:3001/api/saveEditorData', {
        editorData: editorData,
      });

      // Handle any additional logic if needed

      // Set isEditing to false after successful save
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving editor data:', error.message);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  // Fetch stored CKEditor data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getEditorData');
        setEditorData(response.data.editorData);
      } catch (error) {
        console.error('Error fetching editor data:', error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <div style={{
      backgroundImage:
        "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))",
      flex: 1,
      padding: "100px"
    }}>
     
    <div className={`card ${isEditing ? 'editing' : ''}`} >
  
      <br />
      <br />
      <br />
      <div className="card-body">
        <h2 className="card-title">About Us</h2>
        {isEditing ? (
          <RichTextEditor value={editorData} onChange={handleEditorChange} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: editorData }} />
        )}
        <div className="buttons">
          {isEditing ? (
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default About;
