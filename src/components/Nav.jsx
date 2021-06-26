import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
    //recibe onSearch con la finalidad de pasarselo a SearchBar
  return (
      <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand">Weather</a>

          <SearchBar onSearch={onSearch}/>
      </nav>
  );
}

export default Nav;
