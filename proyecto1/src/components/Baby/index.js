import React from "react";
import {connect} from 'react-redux'
import * as babyActions from '../../actions/babies'

const OneBaby = ({onClick, babyName}) => (
    <option className= 'oneBaby' onClick={onClick}>
        {babyName}
    </option>
);

export default connect(
    undefined,
    (dispatch, {name}) =>({
        onClick(){
            console.log('you clicked')
            //dispatch(babyActions.selectBaby(name))
        }
    })
)(OneBaby)
/*
export default OneBaby*/
