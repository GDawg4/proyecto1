import React,{Component} from 'react';
import { connect } from 'react-redux';
import Events from "../Events";
import * as selectors from '../../reducers'
import * as babyActions from '../../actions/babies'
import './styles.css'
import { Field, reduxForm } from 'redux-form'
import isNil from 'lodash/isNil'
const BabySide = ({babyInfo, allBabies, handleSubmit}) =>
    {
        /*const handleSubmit = () =>{
            console.log('yay')
        };*/
        return(
            <div className='baby-wrapper'>
                <div className="header">
                    <div className="current-info">
                        {
                            isNil(babyInfo) ? (
                                <h1>
                                    {'Favor seleccionar'}
                                </h1>
                            ):
                                <div>{babyInfo['firstName']} {babyInfo['lastName']}</div>
                        }
                    </div>
                    <DecoratedForm allBabies={allBabies} handleSubmit={handleSubmit}/>
                    <button className='add-baby'>
                        +
                    </button>
                </div>
                <Events/>
            </div>
        )
    };

const BabyForm = ({allBabies, handleSubmit}) =>{
    return(
            <form onSubmit={handleSubmit(handleSubmit)}>
                    <label>Elegir bebe</label>
                    <div>
                        <Field name="selectedBaby" component="select">
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
})(BabyForm);

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
                console.log('submittedSome')
            }catch (typeError) {
                console.log('primera vez')
            }
        }
    }),
)(BabySide)

/*
export default BabySide;*/
