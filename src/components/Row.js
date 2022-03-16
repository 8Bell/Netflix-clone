import './Row.css'
import React, {useEffect, useState} from 'react';
import axios from '../api/axios';
import MovieModal from './MovieModal';
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, A11y, Mousewheel  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';



export default function Row ({title, id, fetchURL, isLargeRow }) {
    const[movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});
    const w = Math.round(window.innerWidth/250)
  
    
    
    useEffect(() => {
        fetchMovieData();
    }, [fetchURL]);

    const fetchMovieData = async () => {   //async - await 비동기 요청
        const requests = await axios.get(fetchURL);
        setMovies(requests.data.results);
    }

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
        console.log(movieSelected);
    };
    
  return (
    <section className='row'>
        <h2>{title}</h2>
        <div className='slider'>
       
            <Swiper  
            id={id} 
            className="row__posters"

            style={{
                padding: '20px 0 50px 0',
                "--swiper-navigation-color": "#ddd",
                "--swiper-navigation-size": "30px" }}

      modules={[ Navigation, A11y, Mousewheel ]}
      spaceBetween={20}
      slidesPerView={w} // 창 크기에 따라 표시되는 영화의 개수 조절
      slidesPerGroup={Math.round(w/2)} // 표시되는 영화 개수의 절반만 슬라이드
      loop={true}
      //mousewheel={true}
      navigation


            >
                {movies.map((movie) => (
                    <SwiperSlide>
                     <img
                     key={movie.id}
                     className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                     src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                     loading='lazy'
                     alt={movie.name}
                     onClick={()=> handleClick(movie)}
                     />
                     </SwiperSlide>
                ))}
                </Swiper >
           
        


            {/* <div className='slider__arrow-right'>
                <span 
                className='arrow'
                onClick={() => {
                    document.getElementById(id).scrollLeft += window.innerWidth - 80;
                }}
                > {'>'}</span>
            </div> */}
        </div>
        {modalOpen && ( <MovieModal {...movieSelected} setModalOpen={setModalOpen}/>)}
    </section>
  )
}
