import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css'

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){ //primero verificar que tengamos cities
  return (
  
  <div className={styles.cards}>
    
      {cities.map(city => 
      <Card
        id={city.id}
        max={city.max}
        min={city.min}
        name={city.name}
        img={city.img}
        onClose={() => onClose(city.id)}
        key={city.id} //interno de react
      /> )}
  </div>
      ); 
    } else {
      return(
        <div>Sin ciudades</div>
      )
    }
  }