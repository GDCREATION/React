import React from 'react'
import { useNavigate } from 'react-router'
import './SelectChart.css'

function SelectChart() {

    const navigate = useNavigate();
    return (
        <div className='select__chart'>
            <h2 className='heading__chart'>Select Option</h2>
            <div className='chart__section'>
                <div className='bar__chart__section'>
                    <img src='https://cdn.imgbin.com/17/6/20/imgbin-bar-chart-iconfinder-icon-bar-graph-icon-589qF5MynaMpNbprhKqBWnp6m.jpg'
                    alt='bar'
                    onClick={()=>{navigate('/bar', { replace: true })}}
                    className='bar__image'
                    />
                </div>
                <div className='pie__chart__section'>
                    <img src='https://cdn.imgbin.com/19/7/1/imgbin-market-share-computer-icons-chart-share-icon-market-5XzYxzESFJ0DJhkQ73F0785E2.jpg'
                    alt='pie'
                    onClick={()=>{navigate('/pie', { replace: true })}}
                    className='pie__image'
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectChart;
