import React from 'react'
import "./styles.css"
import { connect } from 'react-redux';
import * as eventSelectors from '../../reducers'
import * as actions from '../../actions/events'

const Event = ({
   type,
   date,
   notes,
   testClick
}) =>  (
    <div className='event'>
        <div className="fecha">
            {date}
        </div>

        <div className="title">
            {type}
        </div>

        <div className="notas">
            {notes}
        </div>

        <button className='delete-event'  onClick = {testClick} >
            {'X'}
        </button>
    </div>
);

export default connect(
    (state, { id }) => ({
        type: eventSelectors.getEventById(state, id)["id"],
        date: eventSelectors.getEventById(state, id)["date"],
        notes: eventSelectors.getEventById(state, id)["notes"],
    }),
    (dispatch, { id }) => ({
        testClick() {
            dispatch(actions.deleteEvent(id));
        },
    }),
)(Event);

/*export default connect(
    ((state, {id}) => ({
        type: eventSelectors.getEventById(state, id)["id"],
        date: eventSelectors.getEventById(state, id)["date"],
        notes: eventSelectors.getEventById(state, id)["notes"],
    })),
    ((dispatch, {id}) => ({
            testClick() {
                dispatch(actions.deleteEvent(id))
            }
        })
    )
)(Event);*/
