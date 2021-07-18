import React from 'react';
import PokemonList from './PokemonList.jsx';

class App extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    data : []
 }
}

componentDidMount() {
  getItems()
}

getItems() {
  axios.get('/pokedex').then((results) => {
    this.setState({data: results.data})
  })
}

render() {
return (
<div>
    <div>
      <h1>Pokemon!</h1>
      <button>Show All</button>
      <select id="type">
        <option>Sort by Type</option>
        <option>Grass</option>
        <option>Fire</option>
        <option>Water</option>
        <option>Normal</option>
        <option>Poison</option>
        <option>Electric</option>
        <option>Ground</option>
        <option>Fighting</option>
        <option>Psychic</option>
        <option>Rock</option>
        <option>Ghost</option>
        <option>Dragon</option>
      </select>
      <button>INSERT</button>
      <PokemonList pokeDex = {this.state.data} />
    </div>
  </div>
  )
 }
}

export default App;