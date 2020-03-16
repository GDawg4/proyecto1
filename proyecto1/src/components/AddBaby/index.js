import React from 'react'
import {Field, reduxForm} from "redux-form";
import * as globalConst from "../../const";
import './styles.css'
import {connect} from "react-redux"
import * as babyActions from '../../actions/babies';
import isNil from "lodash/isNil";
import * as selectors from "../../reducers";
import * as eventActions from "../../actions/events";
import {Link} from "react-router-dom";

const AddBaby = ({addBaby}) => (
    <div className='add-baby'>
        <NewBabyForm/>
        <Link to='allBabies'>
            <button onClick={addBaby}>
                +
            </button>
        </Link>
    </div>
);

const AddBabyForm = () => (
    <form>
        <label>Agregar bebé</label>
        <div className='baby-form'>
            <Field className='input' name='nombre' component='input' type='text' placeholder='Nombre'/>
            <Field className='input' name='apellido' component='input' type='text' placeholder='Apellido'/>
        </div>
    </form>
);

const NewBabyForm = reduxForm({
    form:'newBaby'
})(AddBabyForm);

export default connect(
    (state) => ({
        state:state
    }),
    (dispatch) => ({
        dispatch:dispatch
    }),
    (state, dispatch) => ({
        addBaby(){
            dispatch['dispatch'](babyActions.addBaby(
                globalConst.createID(),
                selectors.getForm(state['state']).newBaby.values['nombre'],
                selectors.getForm(state['state']).newBaby.values['apellido'],
            ));
            console.log(state['state'])
        }
    })
)(AddBaby)
