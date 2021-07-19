import React from 'react';
import PokemonList from './PokemonList.jsx';
import axios from 'axios';

class App extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    data : []
 }

 this.getItems = this.getItems.bind(this)
}

componentDidMount() {
  this.getItems()
}

getItems() {
  axios.get('/pokemon').then((results) => {
    this.setState({data: results.data})
  })
  .catch((error) => {
    console.log(error)
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