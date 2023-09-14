import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from '../Routes/FavoritesContext'; 
import "./Card.css";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);
  const { addToFavorites, removeFromFavorites } = useFavorites(); 

  const addFav = () => {
    setIsFav(!isFav);

    if (!isFav) {
      
      addToFavorites({ id, name, username }); 
    } else {
      
      removeFromFavorites(id); 
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