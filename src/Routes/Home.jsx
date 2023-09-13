import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <main>
      <h1>Salud by Digital House</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  );
}

export default Home;