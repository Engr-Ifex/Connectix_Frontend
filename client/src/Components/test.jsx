import React, { useState, useEffect } from 'react';
import api from '../services/api';

function TestConnection() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const testConnection = async () => {
        try {
          console.log('Attempting to connect to:', api.defaults.baseURL);
          const response = await api.get('/test');
          console.log('Full request URL:', api.defaults.baseURL + '/test');
          console.log('Response:', response);
          setMessage(response.data.message);
        } catch (err) {
          console.error('Error details:', err);
          setError('Failed to connect to the backend: ' + err.message);
        }
      };

    testConnection();
  }, []);

  return (
    <div>
      {message && <p>Message from backend: {message}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default TestConnection;