import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, key }) => {

  const { images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
      {
        images.map( (image) => (
          <GifItem 
          key={image.id}
          { ...image }//con esto enviamos todas las props o bien el json completo
          />
        ))
      }
      </div>
    </>
  );
};