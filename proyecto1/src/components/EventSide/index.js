import React from 'react'
import {Field, reduxForm} from "redux-form";
import * as globalConst from '../../const';
import './styles.css'
import {connect} from 'react-redux'
import * as eventActions from '../../actions/events'
import {SUBMIT} from "redux-form/lib/actionTypes";
import handleSubmit from "redux-form/lib/handleSubmit";
import * as selectors from '../../reducers'
import isNil from 'lodash/isNil'
//import actions from "redux-form/lib/actions";

const EventSide = ({addEvent}) => (
    <div className='event-side'>
        <NewEventForm />
        <button onClick={addEvent}>Submit</button>
    </div>
);

const AddEventForm = () => (
    <form>
        <label>Agregar evento</label>
        <div className='baby-form'>
            <Field className='input' name="selectType" component="select">
                <option value = ''> </option>
                {globalConst.actionTypes.map(
                    type => <option key={type} value={type}>{type}</option>
                )}
            </Field>
            <Field className='input' name='notas' component='input' type='text' placeholder='Notas...'/>
        </div>
    </form>
);

const NewEventForm = reduxForm({
    form:'newEvent'
})(AddEventForm);

export default connect(
    (state) => ({
        state:state
    }),
    (dispatch) => ({
        dispatch:dispatch
    }),
    (state, dispatch) => ({
        addEvent(){
            if (!isNil(selectors.getSelectedBaby(state['state']))){
                dispatch['dispatch'](eventActions.addEvent(
                    globalConst.createID(),
                    selectors.getForm(state['state']).newEvent.values['selectType'],
                    globalConst.getDate(),
                    selectors.getForm(state['state']).newEvent.values['notas'],
                    selectors.getSelectedBaby(state['state'])
                ));
                console.log(state['state'])
            }
        }
    })
    )(EventSide)