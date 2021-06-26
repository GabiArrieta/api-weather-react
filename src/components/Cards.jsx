import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css'

export default function Cards({cities, onClose}) {
  
  if(cities){ 
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
        key={city.id} 
      /> )}
  </div>
      ); 
    } else {
      return(
        <div>Sin ciudades</div>
      )
    }
  }