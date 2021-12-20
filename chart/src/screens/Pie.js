import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getPies } from '../store/reducers/appReducer';
import PieSet from './PieSet';

function Pie() {
    const navigate = useNavigate();
    const pies = useSelector(getPies);
    return (
        <div>
            <h3>List of Pie Charts Retireved from Response</h3>
            {
                pies? pies.map((element,i) => (
                    <PieSet key={i} elements={element} />
                )):navigate('/', { replace: true })
            }
            
        </div>
    )
}

export default Pie

