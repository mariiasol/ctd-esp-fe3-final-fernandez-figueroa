import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { getDentistsFromAPI } from './api';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Llama a la función para obtener los dentistas desde la API
    getDentistsFromAPI()
      .then(data => setDentists(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <main>
      <h1>Salud by Digital House</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
}

export default Home;