/* eslint-disable react/jsx-no-comment-textnodes */
import { authService } from 'fbase';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Nav({ ssv, isLogIn, setIsLogIn }) {
	const [show, setShow] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setShow(true);
			} else {
				setShow(false);
			}
		});

		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);

	const logOutClick = () => {
		authService.signOut();
	};

	const handleChange = (e) => {
		setSearchValue(e.target.value);
		navigate(`/search?q=${e.target.value}`);
	};

	const Home = () => {
		navigate('/');
		setSearchValue('');
		ssv('');
		window.location.reload();
	};

	const Auth = () => {
		navigate('/auth');
		window.location.reload();
	};

	const swithLogIn = () => {
		console.log('nav login', isLogIn);
		setIsLogIn(!isLogIn);
	};

	// console.log('login', isLogIn);
	// console.log('set login', setIsLogIn);

	return (
		<>
			<nav className={`nav ${show && 'nav__black'} `}>
				{/* = {`${setShow ? 'nav__black' : 'nav'}`} */}
				<img
					alt='Netflix logo'
					src={
						window.innerWidth < 768
							? 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/185px-Netflix_2015_N_logo.svg.png'
							: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png'
					}
					className='nav__logo'
					onClick={Home}
					href='/'
				/>
				{isLogIn && (
					<div className='nav__inputs'>
						<div className='nav__searchbar'>
							<input
								value={searchValue}
								onChange={handleChange}
								className='nav__input'
								type='text'
								placeholder='Search'
							/>
							<img
								src='https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png'
								className='nav__inputIcon'
								alt=''
							/>
						</div>
					</div>
				)}
				{isLogIn === true ? (
					<img
						alt='User logged'
						src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
						className='nav__avatar'
						onClick={logOutClick}
					/>
				) : (
					<>
						<div className='nav__logins'>
							<p
								className={`nav__logins-t ${
									show && 'nav__black_logins-t'
								}`}>
								무제한으로 즐기는 시리즈와 영화
							</p>
							<button className='nav__signup'>지금 가입하기</button>
							<button
								className={`nav__signin ${
									show && 'nav__black_signin'
								}`}
								onClick={Auth}
								href='/auth'>
								로그인
							</button>
						</div>
					</>
				)}
			</nav>
		</>
	);
}
