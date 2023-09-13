import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from '../Routes/FavoritesContext'; 
import "./Card.css";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);
  const { addToFavorites, removeFromFavorites } = useFavorites(); // Usa useFavorites para obtener el contexto

  const addFav = () => {
    setIsFav(!isFav);

    if (!isFav) {
      // Agrega la tarjeta a favoritos
      addToFavorites({ id, name, username }); // Usa addToFavorites en lugar de addFavorite
    } else {
      // Remueve la tarjeta de favoritos
      removeFromFavorites(id); // Usa removeFromFavorites en lugar de removeFavorite
    }
  };

  return (
    <div className={`card ${isFav ? "fav" : ""}`}>
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>Nombre: {username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        {isFav ? "Remove fav" : "Add fav"}
      </button>
    </div>
  );
};

export default Card;