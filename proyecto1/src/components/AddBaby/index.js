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
        <NewBabyForm className='baby-form'/>
        <Link to='allBabies'>
            <button className='add-baby-button' onClick={addBaby}>
                Agregar bebe
            </button>
        </Link>
    </div>
);

const AddBabyForm = () => (
    <form>
        <label className='title'>Agregar bebé</label>
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
            console.log(state['state'])
            try {
                if (!isNil(state.form.newBaby.values['nombre']) || !isNil(state.form.newBaby.values['apellido'])){
                    dispatch['dispatch'](babyActions.addBaby(
                        globalConst.createID(),
                        selectors.getForm(state['state']).newBaby.values['nombre'],
                        selectors.getForm(state['state']).newBaby.values['apellido'],
                    ));
                }
            }catch (typeError) {

            }
            console.log(state['state'])
        }
    })
)(AddBaby)
