import React from 'react'
import './styles.css'
import {connect} from 'react-redux'
import Event from "../Event";
import * as selectors from '../../reducers'

const Events = ({eventsToShow}) => (
    <div className= 'events'>
        {
            eventsToShow.length === 0 ? (
                <h1>
                    {
                        'No tiene eventos :('
                    }
                </h1>
            ): (
                eventsToShow.map(
                    index => (
                        <Event
                        key = {index}
                        id={index}/>
                    )
                )
            )
        }
    </div>
);

export default connect (
    state => ({
        eventsToShow: selectors.getEventsFromBaby(state, selectors.getSelectedBaby(state))
    }),
    (
        dispatch => ({})
    ))
    (Events)

/*
export default Events*/
