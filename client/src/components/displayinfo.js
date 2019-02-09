import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Diplayinfo extends Component {

  constructor(props) {
      super(props);
      this.state = {eventdate: []};
    }
    componentDidMount(){
      axios.get('/api/event/all')
        .then(response => {
          this.setState({ eventdate: response.data });
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.eventdate.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Event Date</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }