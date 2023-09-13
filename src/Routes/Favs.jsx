import React, { useContext } from "react";
import Card from "../Components/Card";
import { useFavorites } from './FavoritesContext';


  function FavoritesContext() {
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </>
  );
};

export default FavoritesContext;