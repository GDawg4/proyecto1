import React from 'react'
import BabySide from "../BabySide";
import EventSide from "../EventSide";
import './styles.css'

const MainScreen = () => (
    <div className='main-screen'>
        <BabySide/>
        <EventSide/>
    </div>
);

export default MainScreen