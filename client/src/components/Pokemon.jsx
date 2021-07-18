import react from 'react'
import PokemonList from './Pokemon.jsx'

var Pokemon = (props) => (
<div>
<h3>{props.pokeDex.name}</h3>
<img src={props.pokeDex.img} />
</div>
)

export default Pokemon
