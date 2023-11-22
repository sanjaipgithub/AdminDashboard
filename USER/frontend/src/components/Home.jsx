import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [aboutData, setAboutData] = useState('');
  const [termsData, setTermsData] = useState('');

  // Fetch About and Terms data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutResponse = await axios.get('http://localhost:3001/api/getEditorData');
        console.log('About API Response:', aboutResponse.data);
        setAboutData(aboutResponse.data.editorData || '');

        const termsResponse = await axios.get('http://localhost:3001/api/getTermsData');
        console.log('Terms API Response:', termsResponse.data);
        setTermsData(termsResponse.data.editorData || '');
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  console.log('About Data State:', aboutData);
  console.log('Terms Data State:', termsData);

  // Check if aboutData and termsData are strings
  if (typeof aboutData !== 'string' || typeof termsData !== 'string') {
    return (
      <div style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1>Login Success Page</h1>
        <Link to='/login' className="btn btn-light my-5">Logout</Link>

        <div className="about-section mt-5">
          <h2>About Us</h2>
          <p>No data available for About Us or Terms and Conditions</p>
        </div>
      </div>
    );
  }

  // Parse the aboutData HTML to an array of objects
  const aboutCardData = aboutData
    .split('<div class="card mb-4">')
    .filter(Boolean)
    .map((cardContent, index) => ({
      content: cardContent,
      id: `about_${index + 1}`,
    }));

  // Parse the termsData HTML to an array of objects
  const termsCardData = termsData
    .split('<div class="card mb-4">')
    .filter(Boolean)
    .map((cardContent, index) => ({
      content: cardContent,
      id: `terms_${index + 1}`,
    }));

  return (
    <div style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))", textAlign: "center", padding: "20px" }}>
      <h1>USER DASHBOARD</h1>
      <Link to='/login' className="btn btn-dark my-3">Logout</Link>

      <div className="about-section mt-3">
        <h2>About Us</h2>
        <div className="card-deck">
          {aboutCardData.map((card) => (
            <div key={card.id} className="card mb-4">
              <div className="card-body">
                <div dangerouslySetInnerHTML={{ __html: `<div class="card mb-4">${card.content}` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="terms-section mt-3">
        <h2>Terms and Conditions</h2>
        <div className="card-deck">
          {termsCardData.map((card) => (
            <div key={card.id} className="card mb-4">
              <div className="card-body">
                <div dangerouslySetInnerHTML={{ __html: `<div class="card mb-4">${card.content}` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
