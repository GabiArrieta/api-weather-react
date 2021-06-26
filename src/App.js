import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';

export default function App() {
  const [ cities, setCities ] = useState([]);
  //setCities( estado anterior => [...estado anterior, city] )
  //tambien se puede hacer asi: setCities([...cities, new_city])

  let apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  const onSearch = (city) => {
      //fetch, no es necesario importar
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
          .then(res => res.json()) //convertir rta de la consulta en json, es un objeto con todas las caracteristicas de la ciudad
          .then(res => { //trabajo con esta rta
              //elijo solo la info que quiero utilizar
              if(res.main !== undefined){ //verifico el contenido
              const city = { //defino una ciudad
                    min: Math.round(res.main.temp_min),
                    max: Math.round(res.main.temp_max),
                    name: res.name,
                    id: res.id,
                    img: res.weather[0].icon
                };
                if(cities.find(el => el.id === city.id)){
                    alert('Ciudad ya agregada');
                    } else {
                    setCities(oldCities => [...oldCities, city]); //devuelvo un nuevo estado
                    //concateno lo anterior mas la nueva city
                    //si no le paso oldCities pierdo lo anterior
                }
              } else {
                  alert('Ciudad no encontrada')
              }
          });
  }

  const onClose = (id) => {
    setCities(c => c.filter(el => el.id !== id)); //devuelve un arreglo excepto el que le llega por id
  }

  return (
      <div className="App">
        { /* Tu código acá: */ }
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose}/>
      </div>
  );
}