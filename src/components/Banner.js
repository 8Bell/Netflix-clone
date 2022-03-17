import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import requests from "../api/requests";
import "./Banner.css"
import './Row.css'
import styled from 'styled-components';
import MovieModal from './MovieModal';

export default function Banner() {

    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [noVideo, setNoVideo] = useState(true)


    // 모달창 열기
    const [bannerModal, setBannerModal] = useState(false)
    const [bannerMovieSelected, setBannerMovieSelected] = useState({});
    const handleClick = (movie) => {
        setBannerModal(true);
        setBannerMovieSelected(movie);
        console.log(bannerMovieSelected);
    };
    //

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        isVideo();
    }, [movie]);

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

    };

    const isVideo = async ()=> {

        if(movie.videos.results.length != 0){
            setNoVideo(false);}

        console.log(movie)
        console.log(movie.videos.results.length)
        console.log(typeof movie.videos.results[0].key)
        console.log('novideo',noVideo)
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    if (!isClicked ) {

        return (
            <>
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
                        { ! noVideo && 
                        <button 
                        className='banner__button play'
                        onClick={() => setIsClicked(true)}> 
                        {window.innerWidth < 768 ? 'Play': 'Play'}
                        </button>
                        }
                        <button 
                        className='banner__button info'
                        onClick={()=> handleClick(movie)}
                        >
                            <div className='space'></div>
                            { window.innerWidth < 768 ? 'Info': 'More Information'}
                        </button>
                    </div>
                    {/* Div > 2 BUTTONS */}
                    <h1 className='banner__description'>{truncate(movie?.overview, 100)}</h1>
                    {/* Description */}
                </div>
                <div className='banner--fadeBottom' />
            </header>
            {bannerModal && ( <MovieModal {...bannerMovieSelected} setModalOpen={setBannerModal}/>)}
            </>
        );
    } else {
        return (
            <>
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
          </>
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