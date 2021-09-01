import React from 'react'
import pokemons from './data'
import Pokemon from './pokemon'

class Pokedex extends React.Component {
  render () {
    return <section className='Pokedex'>
      {pokemons.map(poke => <Pokemon key={poke.id} infoPoke={poke}/>)}
    </section>
  }
}

export default Pokedex