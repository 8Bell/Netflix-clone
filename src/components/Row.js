import './Row.css'
import React, {useEffect, useState} from 'react';
import axios from '../api/axios';


export default function Row ({title, id, fetchURL, isLargeRow}) {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovieData();
    }, [fetchURL]);

    const fetchMovieData = async () => {   //async - await 비동기 요청
        const requests = await axios.get(fetchURL);
        setMovies(requests.data.results);
    }
    
  return (
    <section className='row'>
        <h2>{title}</h2>
        <div className='slider'>
            <div className='slider__arrow-left'>
                <span 
                className='arrow'
                onClick={() => {
                    document.getElementById(id).scrollLeft -= window.innerWidth - 80; //추후 상위 div로 함수 이동할 것
                }}
                >
                    {'<'}

                </span>
            </div>
            <div id={id} className="row__posters">
                {movies.map((movie) => (
                     <img
                     key={movie.id}
                     className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                     src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                     loading='lazy'
                     alt={movie.name}
                     />
                ))};
            </div> 
            <div className='slider__arrow-right'>
                <span 
                className='arrow'
                onClick={() => {
                    document.getElementById(id).scrollLeft += window.innerWidth - 80;
                }}
                > {'>'}</span>
            </div>
        </div>
    </section>
  )
}
