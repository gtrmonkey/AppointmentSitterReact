// import React...
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// ... and fullcalendar-reactwrapper.
import EventForm from './eventForm';
import FullCalendar from 'fullcalendar-reactwrapper';
import './calendar.css'

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
    events:[
                {
                    title: 'All Day Event',
                    start: '2017-05-01'
                },
                {
                    title: 'Long Event',
                    start: '2017-05-07',
                    end: '2017-05-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2017-05-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2017-05-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2017-05-11',
                    end: '2017-05-13'
                },
                {
                    title: 'Meeting',
                    start: '2017-05-12T10:30:00',
                    end: '2017-05-12T12:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2017-05-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2017-05-28'
                }
            ],
            eventdate:[

            ],
            userevent:{
                firstname: '',
                lastname: '',
                start: '',
              }		
    }
  }
  componentDidMount(){
    axios.get('/api/event/all')
      .then(response => {
        this.setState({ events: response.data });
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }
 
  render() {
    return ( 
      <div id="example-component">
      <div>
        <EventForm />
      </div>
        <FullCalendar
             id = "your-custom-ID"
         header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        }}
         defaultDate={'2019-01-31'}
        navLinks= {true} // can click day/week names to navigate views
        editable= {true}
        eventLimit= {true} // allow "more" link when too many events
        events = {this.state.events}	
    />
      </div>
    );
  }
}

export default Calender;
