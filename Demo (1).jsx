import React, { useState } from 'react';
import './Demo.css';
import axios from 'axios';

const Demo = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('es');

const handleTranslate = async () => {
  if (!text) return alert("Please enter text");

  try {
    const response = await axios.post(
      'https://libretranslate.com/translate',
      {
        q: text,
        source: fromLang,
        target: toLang,
        format: 'text'
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('API response:', response.data); // ✅ Log response
    setTranslated(response.data.translatedText);  // ⚠️ Make sure this key exists
  } catch (error) {
    console.error('Translation error:', error.response?.data || error.message);
    alert('Failed to translate text.');
  }
};

  return (
    <div className="container">
      <h1>Translation App</h1>
      <textarea
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="dropdowns">
        <select value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
        </select>

        <span>➡</span>

        <select value={toLang} onChange={(e) => setToLang(e.target.value)}>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

      <button onClick={handleTranslate}>Translate</button>

      <div className="output">
        <h3>Translated Text:</h3>
        <p>{translated}</p>
      </div>
    </div>
  );
};

export default Demo;