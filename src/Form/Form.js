import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { addRes } from '../actions';
import { fetchData } from '../utils/apiCalls';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitRes = event => {
    const { addRes } = this.props;
    event.preventDefault();
    const newRes  = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    }
    fetchData(newRes)
    addRes(newRes)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: "",
      date: "",
      time: "",
      number: ""
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          name='time'
          placeholder='Time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='number'
          name='number'
          placeholder='Number of guests'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitRes(event)}>Make Reservation</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addRes: newRes => dispatch(addRes(newRes))
})

export default connect(null, mapDispatchToProps)(Form);
