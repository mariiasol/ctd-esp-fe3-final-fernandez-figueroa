import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'; // Archivo de estilos CSS para Detail

const Detail = () => {
  // Obtiene el parámetro dinámico 'id' de la URL
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Realiza una llamada a la API para obtener los detalles del médico por 'id'
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <div className="detail-box">
        <h1 className="detail-title">Detalle {dentist.name}</h1>
        <div className="detail-info">
          <p><strong>Nombre:</strong> {dentist.name}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Teléfono:</strong> {dentist.phone}</p>
          <p><strong>Website:</strong> {dentist.website}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;