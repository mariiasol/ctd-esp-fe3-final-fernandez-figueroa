import React, { useState } from "react";

const Card = ({ name, username, id }) => {
  // Estado para rastrear si la Card está en favoritos
  const [isFav, setIsFav] = useState(false);

  const addFav = () => {
    // Cambiar el estado para indicar que la Card está en favoritos
    setIsFav(!isFav);

    // Aquí iría la lógica para guardar la Card en el localStorage
    // Puedes usar localStorage.setItem para guardar la información de la Card
    if (!isFav) {
      localStorage.setItem(`favCard_${id}`, JSON.stringify({ name, username }));
    } else {
      // Si la Card ya estaba en favoritos, puedes eliminarla del localStorage
      localStorage.removeItem(`favCard_${id}`);
    }
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Username: {username}</p>

      {/* Mostrar el botón "Add fav" o "Remove fav" según si la Card está en favoritos */}
      <button onClick={addFav} className="favButton">
        {isFav ? "Remove fav" : "Add fav"}
      </button>
    </div>
  );
};
export default Card;
