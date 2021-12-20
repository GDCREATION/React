import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getBars } from '../store/reducers/appReducer';
import BarSet from './BarSet';

function Bar() {
    const bars = useSelector(getBars);
    const navigate = useNavigate()
    debugger
    return (
        <div>
            <h3>List of Bar Charts Retireved from Response</h3>
            {
                
                bars? bars.map((element,i) => (
                    <BarSet key={i} elements={element} />
                )):navigate('/', { replace: true })
            }
            
        </div>
    )
}

export default Bar
