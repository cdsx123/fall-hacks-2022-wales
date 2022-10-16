import React from 'react'
import './style.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { db } from '../../db/storage';

const CalendarApp = () => {
    const [events , setEvents] = React.useState(null)
    const handleDateClick = (e) => { 
        console.log(e.dateStr)
    }

    React.useEffect(() => {
        const data = db.getItem("data");
        if(data === null){
            return;
        }
        const json = JSON.parse(data);
        const newEvents = json["data"].map((e) => {
           return  {title: e.name, date: e.deadline.substr(0,e.deadline.indexOf("T"))}
        })
        setEvents(newEvents)
    },[]);
    return (
        <div className='calendar'>
            <FullCalendar
                width="100px"
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={handleDateClick}
                events={events}
            />
        </div>
    )
}

export default CalendarApp


