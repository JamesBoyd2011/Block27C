import React from "react";
import "../../index.css";
import { useFetchPlayersQuery } from "../../api/puppyBowlApi"

export const Players = () => {
  const { data = {}, error, isLoading } = useFetchPlayersQuery();
  if (isLoading) {
    return <p>Loading Content Please Wait</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return (
    <div className="players">
      {data.data.players.map(({ name, breed, status, imageUrl,id }) => (
        <div key={id} className="player-card">
          <img src={imageUrl} alt={name} className="player-image"></img>

          <div className="player-details">

            <h2>  {name} </h2>

            <p>  {breed} </p>

            <p> {status} </p>
          </div>
        </div>
      ))}
    </div>
  );
};


