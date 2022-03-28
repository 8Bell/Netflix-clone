import React, { useState } from 'react';
import './Auth.css';
import styled from 'styled-components';
import { authService, firebaseInstance } from 'fbase';
import { useNavigate } from 'react-router-dom';

export default function AuthPage({ setIsLogIn, newAccount, setNewAccount }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [newAccount, setNewAccount] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const onChange = (event) => {
		const {
			target: { name, value },
		} = event;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};
	const Home = () => {
		navigate('/');
		window.location.reload();
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			try {
				let data;
				if (newAccount) {
					data = await authService.createUserWithEmailAndPassword(
						email,
						password
					);
				} else {
					data = await authService.signInWithEmailAndPassword(email, password);
				}
				console.log(data);
				navigate('/');
				window.location.reload();
				setIsLogIn(true);
			} catch (error) {
				if (error.code === 'auth/invalid-email') {
					setError('올바른 아이디를 입력하세요.');
				} else if (error.code === 'auth/wrong-password' || 'auth/user-not-found') {
					setError('아이디 혹은 비밀번호가 틀렸습니다.');
				} else if (error.code === 'auth/too-many-requests') {
					setError('계정이 기억나지 않습니까?');
				} else if (error.code === 'auth/weak-password') {
					setError('6자리 이상의 비밀번호를 입력해주세요.');
				}

				console.log(error);
			}
		} catch (error) {
			if (error.code === 'auth/too-many-requests') {
				setError('계정이 기억나지 않습니까?');
			}
			console.log(error);
		}
	};

	const loginToogle = () => {
		console.log(newAccount, setNewAccount);
		setNewAccount((prev) => !prev);
	};

	const onGoogleClick = async () => {
		let provider = new firebaseInstance.auth.GoogleAuthProvider();
		const data = await authService.signInWithPopup(provider);
		navigate('/');
		setIsLogIn(true);
		window.location.reload();
	};

	return (
		<div>
			<div className='auth__wrapper'>
				<div className='auth__wrapper_bg'>
					<img
						className='auth__wrapper_img'
						src='https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/25155d75-2aae-4c0a-aee9-25c07646d644/KR-ko-20220307-popsignuptwoweeks-perspective_alpha_website_large.jpg'
					/>
				</div>
				<div className='auth__navbar'>
					<img
						className='auth__navlogo'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png'
						onClick={Home}></img>
				</div>
				<div className='auth__body'>
					<div className='auth__forms'>
						<div className='auth__form'>
							<h1 className='auth__form-t'>
								{newAccount ? '가입하기' : '로그인'}
							</h1>
							<form onSubmit={onSubmit}>
								<input
									name='email'
									type='text'
									placeholder='이메일 주소를 입력하세요'
									required
									value={email}
									onChange={onChange}
									className='authInput'
								/>

								<input
									name='password'
									type='password'
									placeholder='비밀번호를 입력하세요'
									required
									value={password}
									onChange={onChange}
									className='authInput'
								/>
								<p className='errorMessage'>{error}</p>
								<input
									type='submit'
									value={newAccount ? '계정 만들기' : '로그인'}
									className='authSubmit'></input>
							</form>
							<div>
								<p
									onClick={loginToogle}
									style={{
										color: '#777',
										width: '100%',
										marginTop: '13px',
										textAlign: 'right',

										cursor: 'pointer',
									}}>
									{newAccount
										? '아이디가 있습니까?'
										: `넷플릭스 회원이 아닌가요? 지금 가입하세요`}
								</p>
								<>
									<img
										src='https://cdn.icon-icons.com/icons2/2699/PNG/512/google_logo_icon_169090.png'
										style={{
											height: '14px',

											display: 'inline-flex',
											marginRight: '5px',
										}}
									/>
									<p
										onClick={onGoogleClick}
										name='google'
										style={{
											color: '#777',
											marginTop: '30px',
											textAlign: 'left',
											cursor: 'pointer',
											display: 'inline-flex',
										}}>
										Google로 로그인
									</p>
								</>
							</div>
						</div>
					</div>
				</div>
				<div className='AuthFooterContainer'>
					<div className='FooterContent'>
						<div className='FooterLinkContainer'>
							<div className='FooterLinkTitle'>넷플릭스 대한민국</div>
							<div className='FooterLinkContent'>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko/node.412'>
									넷플릭스 소개
								</div>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko'>
									자주 묻는 질문
								</div>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko'>
									고객 센터
								</div>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko'>
									미디어 센터
								</div>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko'>
									입사 정보
								</div>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko'>
									이용 약관
								</div>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko'>
									개인 정보
								</div>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko'>
									회사 정보
								</div>
								<div className='FooterLink' href='https://fast.com'>
									속도 테스트
								</div>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko'>
									쿠키 설정
								</div>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko'>
									법적 고지
								</div>
								<div
									className='FooterLink'
									href='https://help.netflix.com/ko'>
									문의 하기
								</div>
							</div>
							<div className='FooterDescContainer'>
								<div className='FooterDescRights'>
									Netflix 2022 Rights Resverd.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
