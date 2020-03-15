import React from 'react'
import "./styles.css"
import { connect } from 'react-redux';
import * as selectors from '../../reducers'
import * as actions from '../../actions/events'

const Event = ({
   event,
    testClick
}) =>  (
    <div className='event'>
        <div className="fecha">
            {event['date']}
        </div>

        <div className="title">
            {event['id']}
        </div>

        <div className="notas">
            {event['notes']}
        </div>

        <button className='delete-event' onClick = {testClick} >
            {'X'}
        </button>
    </div>
);

const mapStateToProps = (state, { id }) => ({
    state:state,
    event: selectors.getEventById(state, id),
    currentBaby: selectors.getSelectedBaby(state)
});

const mapDispatchToProps = (dispatch, { id }) => ({
    dispatch:dispatch
    });

const mergeProps = (stateProps, dispatchProps, {id}) => ({
    event:stateProps['event'],
    testClick(){
        dispatchProps['dispatch'](actions.deleteEvent(stateProps['currentBaby'], id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
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
