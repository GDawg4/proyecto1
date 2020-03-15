import React from 'react';
import { connect } from 'react-redux';
import Events from "../Events";
import * as selectors from '../../reducers'
import * as babyActions from '../../actions/babies'
import './styles.css'
import { Field, reduxForm, formValueSelector } from 'redux-form'

const BabySide = ({babyInfo, allBabies, addBaby, selectBaby}) => (
    <div className= 'baby-wrapper'>
        <div className="header">

            <div className="current-info">
                {babyInfo['firstName']}
            </div>
            <DecoratedForm/>
            <button className='add-baby' onClick={addBaby}>
                +
            </button>
        </div>
        <Events/>
    </div>
);

const BabyForm = ({allBabies2}) =>(
    <form>
        <div>
            <label>Favorite Color</label>
            <div>
                <Field name="favoriteColor" component="select">
                    {console.log(allBabies2)}
                </Field>
            </div>
        </div>
    </form>
);


const DecoratedForm = reduxForm({
    form: 'babies'
})(BabyForm);
//TODO revisar connect
connect(
    state => ({
        allBabies2:'fd'
    })
)(BabyForm);

export default connect(
    state => ({
        allBabies: selectors.getAllBabies(state),
        babyInfo: selectors.getBaby(state, selectors.getSelectedBaby(state))
    }),
    dispatch => ({
        onClick() {
            dispatch(babyActions.selectBaby('2'));
            console.log('youclicked')
        },
        selectBaby(){
            console.log('you clicked')
        }
    })
)(BabySide)

/*
export default BabySide;*/
