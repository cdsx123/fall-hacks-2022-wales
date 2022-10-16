import React from 'react'
import './style.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import Box from "@mui/system/Box";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class CalendarApp extends React.Component {
    render() {
        return (
            <div className='calendar'>

                
                <FullCalendar
                    width="100px"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    dateClick={this.handleDateClick}
                    events={[
                        { title: 'event 1', date: '2022-10-01' },
                        { title: 'event 2', date: '2019-04-02' }
                    ]}
                />
                    
            </div>
        )
    }

    handleDateClick = (arg) => { // bind with an arrow function
        console.log(arg.dateStr)
    }

}


