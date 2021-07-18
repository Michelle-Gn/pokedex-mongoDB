import React from 'react';
import App from './App.jsx';

var PokemonList = (props) => (
<div>
  {props.data.map ((pokemon, index) => (
    <Pokemon pokemon = {pokemon} key = {index} />
  ))}
</div>
)

export default PokemonList;