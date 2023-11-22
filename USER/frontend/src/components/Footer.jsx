import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Footer = () => {
  const [termsData, setTermsData] = useState('');

  // Fetch Privacy data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const privacyResponse = await axios.get('http://localhost:3001/api/getPrivacyData');
        console.log('Privacy API Response:', privacyResponse.data);

        // Update variable name here
        setTermsData(privacyResponse.data.editorData || '');
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  console.log('Terms Data State:', termsData);

  // Check if termsData is a string
  if (typeof termsData !== 'string') {
    // Handle the case where termsData is not a string
    // You can add content or behavior here if needed
  }

  return (
    <footer style={{backgroundColor:"black" , color:"white",textAlign:"center"}}>
      {/* Footer content goes here */}
      <div>
        {/* Render Privacy Policy content */}
        <div dangerouslySetInnerHTML={{ __html: termsData }} />
      </div>
    </footer>
  );
};

export default Footer;
