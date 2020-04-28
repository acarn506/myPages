import React from 'react'


const Activities = (props) => {

    let eventList =  props.events.events.map( (act, i) => {
        return <tr key={'act' + i} >
            <td >{act.name} </td>
            <td >{act.dates}</td>
            </tr>
        })

    return (
        <div className='members'>
            <h1 className='header'>Club Activities</h1>
            <table>

            <thead>
            <tr>
                <th>Events</th>
                <th>Dates</th>
            </tr>
            </thead>

            <tbody>
            {eventList}
            </tbody>

            </table>
        </div>
    )
}

export default Activities