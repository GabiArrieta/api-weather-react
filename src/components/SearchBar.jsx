import React, {useState} from "react";
import styles from './SearchBar.module.css';


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState(""); //estado local que manipula lo que esta en el input

    //en setCity() //una vez que se termina el evento, el input se limpia}
    //el submit del input ejecuta el OnSubmit del formulario, el boton despliega la accion

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city); //ejecuta la funcion que se le pasa por parametros con la city de su estado, toma el input y se lo envia al onSearch que ejecuta el fetch en la App, el componente padre
        setCity(""); }}>

        <input
          type="text"
          placeholder="City..."
          value={city} //valor que se corresponde con el de estado interno del componente
          onChange={e => setCity(e.target.value)} //evento que registra cada cambio
        />
        <input type="submit" value="Add" />

      </form>
    );
  }
