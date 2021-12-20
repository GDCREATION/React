import { Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import './BarSet.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


function BarSet(props) {
    
    const [data,setData]=useState([]);

    useEffect(() => {
        setData(props.elements)
    }, [props]) 

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Bar',
          },
        },
      };
      
      const labels = props.elements;
      
    const dataRes = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: data,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };

      function changeState(el,i){
        el.preventDefault();
        let v = [...data];
        v[i]=parseInt(el.target.value);
        setData(v)

    }

    return (
        <div className="bar__Set">
            <div className='bar__Set__doughnut'>
            <Bar options={options} data={dataRes} />
            </div>
            <div className='bar__Set__input_section'>
                <h5 style={{margin:0}}>Change Values</h5>
            {data.map((el,i)=>(
                <input key={i} type="text" className='bar__Set__input' value={el} onChange={(e)=>{changeState(e,i)}}/>
            ))}
            </div>
        </div>
    )
}

export default BarSet
