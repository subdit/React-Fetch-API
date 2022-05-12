import React, { useState, useEffect } from 'react';
import Form from './Form';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  // const [fetchError, setFetchError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        // if (response.ok) throw Error('Did not receive the data');
        setItems(data);
        // setFetchError(null);
      } catch (err) {
        console.log(err);
        // setFetchError();
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div className='App'>
      <h3>hello..From Form</h3>
      <Form reqType={reqType} setReqType={setReqType} />
    </div>
  );
}

export default App;
