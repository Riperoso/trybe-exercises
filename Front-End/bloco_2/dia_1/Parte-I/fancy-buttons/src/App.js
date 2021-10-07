import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.parGreen = this.parGreen.bind(this)
    this.state = {
      numeroDeCliques1: 0
    }
  }

  parGreen () {
    if(this.state.numeroDeCliques1 % 2 !== 0){
      document.querySelector('.buto').style = 'background-color: green'
    }
    else {
      document.querySelector('.buto').style = 'background-color: gray'
    }
    this.setState((stateAnt, _props) => ({
      numeroDeCliques1: stateAnt.numeroDeCliques1 + 1
    }))
  };

  render() {
    return (
      <div>
        <button className='buto' onClick={this.parGreen}>{this.state.numeroDeCliques1}</button>
      </div>
    )
  }
}

export default App;
