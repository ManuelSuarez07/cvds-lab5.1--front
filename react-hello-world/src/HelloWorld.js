// src/HelloWorld.js
import React, { useState, useEffect } from 'react';

function HelloWorld() {
  const [message, setMessage] = useState('Hello World!');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default HelloWorld;
