import {Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import './PieSet.css'

ChartJS.register(ArcElement, Tooltip, Legend);

function PieSet(props) {

    const [data,setData]=useState([]);

    useEffect(() => {
        setData(props.elements)
    }, [props]) 

    const dataRes ={
        labels: [],
        datasets: [
          {
            label: 'Pie',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      function changeState(el,i){
          el.preventDefault();
          let v = [...data];
          v[i]=parseInt(el.target.value);
          setData(v)

      }
    return (
        <div className="pie__Set">
            <div className='pie__Set__doughnut'>
            <Doughnut data={dataRes} />
            </div>
            <div className='pie__Set__input_section'>
                <h5 style={{margin:0}}>Change Values</h5>
            {data.map((el,i)=>(
                <input key={i} type="text" className='pie__Set__input' value={el} onChange={(e)=>{changeState(e,i)}}/>
            ))}
            </div>
        </div>
    )
}

export default PieSet
