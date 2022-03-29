/* eslint-disable react/jsx-no-comment-textnodes */
import { authService } from 'fbase';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Nav({ isLogIn, newAccount, setNewAccount }) {
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
		// ssv('');
		window.location.reload();
	};

	const Auth = (e) => {
		if (e.target.name === 'signin') {
			console.log('로그인버튼');
			setNewAccount(false);
		} else if (e.target.name === 'signup') {
			console.log('가입버튼');
			setNewAccount(true);
		}
		navigate('/auth');
		console.log(newAccount, setNewAccount);
		// window.location.reload();
	};

	// console.log('login', isLogIn);
	// console.log('set login', setIsLogIn);

	return (
		<>
			<nav className={`nav ${show && 'nav__black'} `}>
				{/* = {`${setShow ? 'nav__black' : 'nav'}`} */}
				<img
					alt='Netflix logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/185px-Netflix_2015_N_logo.svg.png'
					className='nav__logo_m'
					onClick={Home}
					href='/'
				/>
				<img
					alt='Netflix logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png'
					className='nav__logo_pc'
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
					<div className='nav__logins_done'>
						<p className='nav__userName'>
							{authService.currentUser.displayName ||
								authService.currentUser.email}
							님 반갑습니다.
						</p>
						<img
							alt='User logged'
							src={
								authService.currentUser.photoURL ||
								'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
							}
							className='nav__avatar'
						/>
						<button className='nav__signin' onClick={logOutClick}>
							로그아웃
						</button>
					</div>
				) : (
					<>
						<div className='nav__logins'>
							<p
								className={`nav__logins-t ${
									show && 'nav__black_logins-t'
								}`}>
								무제한으로 즐기는 시리즈와 영화
							</p>
							<button
								className='nav__signup'
								onClick={Auth}
								href='/auth'
								name='signup'>
								지금 가입하기
							</button>
							<button
								className={`nav__signin ${
									show && 'nav__black_signin'
								}`}
								onClick={Auth}
								href='/auth'
								name='signin'>
								로그인
							</button>
						</div>
					</>
				)}
			</nav>
		</>
	);
}
