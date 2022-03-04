import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import requests from "../api/requests";
import "./Banner.css"

export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {

        //현재 상영중인 영화 정보 목록을 가져오기
        const request = await axios.get(requests.fetchNowPlaying);
        //console.log(request)

        //여러 영화 중 영화 하나의 ID를 랜덤으로 고르기
        //Math.floor(Math.random()*max)
        const movieId = 
        request.data.results[
            Math.floor(Math.random()*request.data.results.length)
        ].id;
 
        //특정 영화의 더 상세한 정보를 가져오기
        //비디오 정보 포함
        const { data: movieDetail } = await axios.get(`movie/${movieId}`,{
            params:{ append_to_response: 'videos'},
        });
        setMovie(movieDetail);
        console.log('movie', movie ) 
    };

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0,n-1) + "..." :str;
    }


  return (
    <header
    className='banner'
    style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
    }}
    >
        <div className='banner__contents'>
            {/* Title */}
                <h1 className='banner__titles'>
                    {/* 앞에 것부터 차례로 확인하며 데이터 있는 것 하나 가져옴 */}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button play'> Play</button>
                    <button className='banner__button info'>
                        <div className='space'></div>More Information
                    </button>
                </div>
                {/* Div > 2 BUTTONS */}
                <h1 className='banner__description'>{truncate(movie?.overview, 100)}</h1>
                {/* Description */}
            </div>
        <div className='banner--fadeBottom'/>
    </header>
  )
}
