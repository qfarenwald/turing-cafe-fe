import React, { Component } from 'react';
import ResCont from '../ResCont/ResCont';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => {
        this.setState({
          reservations: data
        })
      })
  }

  addRes = newRes => {
    this.setState({
      reservations: [...this.state.reservations, newRes]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.addRes}/>
        </div>
        <div className='resy-container'>
          <ResCont reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
