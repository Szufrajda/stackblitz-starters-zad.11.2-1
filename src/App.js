import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Generator losowych osób</h1>
      <button onClick={fetchRandomUser}>Wylosuj osobę</button>

      {userData && (
        <div>
          <img src={userData.picture.large} alt="User" />
          <p>Imię i Nazwisko: {userData.name.first} {userData.name.last}</p>
          <p>Adres e-mail: {userData.email}</p>
          <p>Lokalizacja: {userData.location.city}, {userData.location.country}</p>
        </div>
      )}
    </div>
  );
};

export default App;