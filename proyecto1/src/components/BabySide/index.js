import React,{Component} from 'react';
import { connect } from 'react-redux';
import Events from "../Events";
import * as selectors from '../../reducers'
import * as babyActions from '../../actions/babies'
import './styles.css'
import { Field, reduxForm } from 'redux-form'
import isNil from 'lodash/isNil'
import {Link} from "react-router-dom";

const BabySide = ({babyInfo, allBabies, handleSubmit, addBaby}) =>
    {
        return(
            <div className='baby-wrapper'>
                <div className="header">
                    <div className="current-info">
                        {
                            isNil(babyInfo) ? (
                                <div className='title'>
                                    {'Favor seleccionar'}
                                </div>
                            ):
                                <div className='title'>{babyInfo['firstName']} {babyInfo['lastName']}</div>
                        }
                    </div>
                    <DecoratedForm allBabies={allBabies} handleSubmit={handleSubmit}/>
                    <Link to={'/addBaby'}>
                        <button className= 'redirect-button'>
                            Agregar bebe
                        </button>
                    </Link>

                </div>
                <Events/>
            </div>
        )
    };

const SelectBabyForm = ({allBabies, handleSubmit}) =>{
    return(
            <form className='baby-form' onSubmit={handleSubmit(handleSubmit)}>
                    <label className='choose-baby'>Elegir bebe</label>
                    <div>
                        <Field className='select-baby-field' name="selectedBaby" component="select">
                            <option value = ''> </option>
                            {allBabies.map(
                                baby => <option key={baby} value={baby}> {baby} </option>
                            )}
                        </Field>
                    </div>
            </form>
        )
    };


const DecoratedForm = reduxForm({
    form: 'babies',
    onClick(){
        console.log('yay')
    }
})(SelectBabyForm);

export default connect(
    state => ({
        formState: selectors.getForm(state),
        selectedBaby:selectors.getSelectedBaby(state),
        allBabies: selectors.getAllBabies(state),
        babyInfo: selectors.getBaby(state, selectors.getSelectedBaby(state))
    }),
    dispatch => ({
        dispatch:dispatch
    }),
    (propsFromState, propsFromDispatch, mergeProps) => ({
        allBabies: propsFromState['allBabies'],
        babyInfo: propsFromState['babyInfo'],
        handleSubmit(){
            try {
                propsFromDispatch['dispatch'](babyActions.selectBaby(propsFromState['formState'].babies.values['selectedBaby']));
            }catch (typeError) {
            }
        }
    }),
)(BabySide)

