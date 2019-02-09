import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class eventForm extends Component {

  constructor() {
    super();
    this.state ={userevent:{
      firstname: '',
      lastname: '',
      start: '',
    }};
  }
  onChange = (e) => {
    const state = this.state.userevent
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state.data)
   }

  onSubmit = (e) => {
   

    const { firstname, lastname, start } = this.state.userevent;
    let config = {
        headers: {'Authorization' : `bearer ${localStorage.getItem('jwt')}`}
       }
    let title = `${firstname} ${lastname}`
    console.log(title)
    axios.post('/api/event/', { title, start },config)
      .then((result) => { console.log(result)
        // this.props.history.push("/calander")
      });
  }

  render() {
    const { firstname, lastname, start } = this.state.userevent;
    return (
      <div class="container">
        <form class="form-signin">
          <h2 class="form-signin-heading">Set Your Appointment</h2>
          <label for="inputFname" class="sr-only"></label>
          <input type="type" class="form-control" placeholder="First Name" name="firstname" value={firstname} onChange={this.onChange} required/>
          <label for="inputLname" class="sr-only"></label>
          <input type="type" class="form-control" placeholder="Last Name" name="lastname" value={lastname} onChange={this.onChange} required/>
          <label for="inputDate" class="sr-only"></label>
          <input type="date" class="form-control" placeholder="date" name="start" value={start} onChange={this.onChange} required/>
          <div>
          <button class="btn btn-lg btn-primary btn-block" type="submit"  onClick={this.onSubmit}>Submit</button>
          </div>
        </form>
      </div>
      
    );
  }
}

export default eventForm;