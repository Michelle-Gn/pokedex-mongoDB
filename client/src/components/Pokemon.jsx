import React from 'react'
import PokemonList from './Pokemon.jsx'

var Pokemon = (props) => (
<div>
<h3>{props.pokemon.name}</h3>
<img src={props.pokemon.img} />
</div>
)

export default Pokemon
