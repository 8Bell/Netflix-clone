import './Row.css';
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import MovieModal from './MovieModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useModalClose } from '../hooks/useModalClose';

export default function Row({ title, id, fetchURL, isLargeRow, isBlur, isLogIn }) {
	const [movies, setMovies] = useState([]);
	const [modalOpen, setModalOpen, clickRef] = useModalClose();
	const [movieSelected, setMovieSelected] = useState({});
	const w = Math.round(window.innerWidth / 300) + 1;

	const [checkLogIn, setCheckLogIn] = useState(isLogIn);
	useEffect(() => {
		setCheckLogIn((prev) => !prev);
	}, [isLogIn]);

	useEffect(() => {
		fetchMovieData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchURL, isLogIn]);

	const fetchMovieData = async () => {
		//async - await 비동기 요청
		const requests = await axios.get(fetchURL);
		setMovies(requests.data.results);
	};

	const handleClick = (movie) => {
		setModalOpen(true);
		setMovieSelected(movie);
		console.log(movieSelected);
	};

	console.log('islogin', isLogIn);

	return (
		<>
			<section className={`row ${isBlur && !checkLogIn && 'rowBlur'}`}>
				<h2 className='category__title'>{title}</h2>
				<div className='slider'>
					<Swiper
						id={id}
						key={id}
						className='row__posters'
						style={{
							padding: '10px 2em 3rem 2em',
							'--swiper-navigation-color': '#e50914',
							'--swiper-navigation-size': '1rem',
						}}
						modules={[Navigation, A11y, Mousewheel]}
						spaceBetween={20}
						slidesPerView={w} // 창 크기에 따라 표시되는 영화의 개수 조절
						slidesPerGroup={Math.round(w / 2)} // 표시되는 영화 개수의 절반만 슬라이드
						loop={true}
						//mousewheel={true}
						navigation>
						<div className='side_fadeout' />
						{movies.map((movie) => (
							<SwiperSlide key={movie.id} className='row__posterBox'>
								<div>
									<img
										className={`row__poster ${
											isLargeRow && 'row__posterLarge'
										}`}
										src={`https://image.tmdb.org/t/p/original/${
											isLargeRow ? movie.poster_path : movie.backdrop_path
										}`}
										loading='lazy'
										alt={movie.name}
										onClick={() => handleClick(movie)}
									/>

									<p className='row__poster-title'>
										{movie?.title || movie?.name || movie?.original_name}
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				{modalOpen && (
					<MovieModal
						{...movieSelected}
						setModalOpen={setModalOpen}
						clickRef={clickRef}
					/>
				)}
			</section>
		</>
	);
}
