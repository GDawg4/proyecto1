import React from 'react';
import { connect } from 'react-redux';
import Events from "../Events";
import DropdownButton from "react-bootstrap/DropdownButton";
import 'bootstrap/dist/css/bootstrap.css';
import {DropdownItem} from "react-bootstrap";
import * as selectors from '../../reducers'
import * as babyActions from '../../actions/babies'

const BabySide = ({babyInfo, allBabies, onClick}) => (
    <div className= 'baby-wrapper'>
        <div className="header">

            <div className="current-info">
                {babyInfo['firstName']}
            </div>

            <DropdownButton id="dropdown-basic-button" title="Elegir bebe">
                {allBabies.map(
                    baby =>(
                        <DropdownItem key = {baby} onClick={onClick}> {baby}</DropdownItem>
                    )
                )}
            </DropdownButton>
        </div>
        <Events/>
    </div>
);

export default connect(
    state => ({
        allBabies: selectors.getAllBabies(state),
        babyInfo: selectors.getBaby(state, selectors.getSelectedBaby(state))
    }),
    dispatch => ({
        onClick() {
            dispatch(babyActions.selectBaby('2'));
            console.log('youclicked')
        }
    })
)(BabySide)

/*
export default BabySide;*/
