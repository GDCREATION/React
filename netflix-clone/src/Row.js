import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
function Row({title, fetchURL, isLargeRow=false}) {

    const [movie,setMovie] = useState([])
    const baseurl = 'https://image.tmdb.org/t/p/original/'
    useEffect(() => {
        async function fectchData(){
            const req = await axios.get(fetchURL)
            setMovie(req.data.results)
            return req
          }
          
          fectchData()
    }, [fetchURL])

    return (
        <div className = 'row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {movie.map(m =>( 
                    ((isLargeRow && m.poster_path) ||
                    (!isLargeRow && m.backdrop_path)) &&
                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${baseurl}${isLargeRow?m.poster_path:m.backdrop_path}`} alt=""/>
                ))}
            </div>
            
        </div>
    )
}

export default Row
