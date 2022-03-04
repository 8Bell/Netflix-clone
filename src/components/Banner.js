import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import requests from "../api/requests";
import "./Banner.css"
import styled from 'styled-components';

export default function Banner() {

    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        //현재 상영중인 영화 정보 목록을 가져오기
        const request = await axios.get(requests.fetchNowPlaying);
        //console.log(request)

        //여러 영화 중 영화 하나의 ID를 랜덤으로 고르기
        //Math.floor(Math.random()*max)
        const movieId =
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ].id;

        //특정 영화의 더 상세한 정보를 가져오기
        //비디오 정보 포함
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: 'videos' },
        });
        setMovie(movieDetail);
        console.log('movie', movie)
    };

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    if (!isClicked) {

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
                        <button className='banner__button play'
                            onClick={() => setIsClicked(true)}
                        > Play</button>
                        <button className='banner__button info'>
                            <div className='space'></div>More Information
                        </button>
                    </div>
                    {/* Div > 2 BUTTONS */}
                    <h1 className='banner__description'>{truncate(movie?.overview, 100)}</h1>
                    {/* Description */}
                </div>
                <div className='banner--fadeBottom' />
            </header>
        );
    } else {
        return (
            <Container>
                <HomeContainer>
                    <Iframe
                    src={`https://www.youtube.com/embed/${movie.videos.results[0].key}
                    ?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                    width='640'
                    height='360'
                    frameBorder='0'
                    allow='autoplay; fullscreen'
                    ></Iframe>
                </HomeContainer>
            </Container>
        )
    }
}

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
`

const HomeContainer = styled.div`
width: 100%;
height: 100%;
`

const Iframe = styled.iframe`
width: 100%;
height: 100%;
z-index: -1;
opacity: 0.65;
border: none;

&::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heith: 100%;
}
`