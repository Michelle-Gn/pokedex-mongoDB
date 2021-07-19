import React from 'react';
import App from './App.jsx';
import Pokemon from './Pokemon.jsx';

var PokemonList = (props) => (
<div>
  {props.pokeDex.map ((pokemon, index) => (
    <Pokemon pokemon = {pokemon} key = {index} />
  ))}
</div>
)

export default PokemonList;