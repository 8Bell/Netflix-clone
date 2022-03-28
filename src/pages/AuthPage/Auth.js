import React, { useState } from 'react';
import './Auth.css';
import styled from 'styled-components';
import { authService } from 'fbase';
import { useNavigate } from 'react-router-dom';

export default function AuthPage(setIsLogIn) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [newAccount, setNewAccout] = useState(false);
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
			let data;
			if (newAccount) {
				data = await authService.createUserWithEmailAndPassword(email, password);
			} else {
				data = await authService.signInWithEmailAndPassword(email, password);
			}
			console.log(data);
			navigate('/');
			window.location.reload();
			setIsLogIn(true);
		} catch (error) {
			setError(error.message);
		}
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
							<h1 className='auth__form-t'>로그인</h1>
							<form onSubmit={onSubmit}>
								<input
									name='email'
									type='text'
									placeholder='이메일 주소 또는 전화번호'
									required
									value={email}
									onChange={onChange}
									className='authInput'
								/>
								{error}
								<input
									name='password'
									type='password'
									placeholder='비밀번호'
									required
									value={password}
									onChange={onChange}
									className='authInput'
								/>
								<input
									type='submit'
									value={newAccount ? '계정 만들기' : '로그인'}
									className='authSubmit'></input>
							</form>
							{/* <div>
								<button>google로 로그인</button>
							</div> */}
						</div>
					</div>
				</div>
				<FooterContainer>
					<FooterContent>
						<FooterLinkContainer>
							<FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
							<FooterLinkContent>
								<FooterLink href='https://help.netflix.com/ko/node.412'>
									넷플릭스 소개
								</FooterLink>
								<FooterLink href='https://help.netflix.com/ko'>
									자주 묻는 질문
								</FooterLink>
								<FooterLink href='https://help.netflix.com/ko'>
									고객 센터
								</FooterLink>
								<FooterLink href='https://help.netflix.com/ko'>
									미디어 센터
								</FooterLink>
								<FooterLink href='https://help.netflix.com/ko'>
									입사 정보
								</FooterLink>
								<FooterLink href='https://help.netflix.com/ko'>
									이용 약관
								</FooterLink>
								<FooterLink href='https://help.netflix.com/ko'>
									개인 정보
								</FooterLink>
								<FooterLink href='https://help.netflix.com/ko'>
									회사 정보
								</FooterLink>
								<FooterLink href='https://fast.com'>
									속도 테스트
								</FooterLink>
								<FooterLink href='https://help.netflix.com/ko'>
									쿠키 설정
								</FooterLink>
								<FooterLink href='https://help.netflix.com/ko'>
									법적 고지
								</FooterLink>
								<FooterLink href='https://help.netflix.com/ko'>
									문의 하기
								</FooterLink>
							</FooterLinkContent>
							<FooterDescContainer>
								<FooterDescRights>
									Netflix 2022 Rights Resverd.
								</FooterDescRights>
							</FooterDescContainer>
						</FooterLinkContainer>
					</FooterContent>
				</FooterContainer>
			</div>
		</div>
	);
}

const FooterContainer = styled.div`;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0 50px 0;
// border-top: 1px solid rgb(25,25,25);
width: 100%
position: absolute;
z-index: 10;
background-color: rgb(0,0,0,0.8);

@media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
}
`;

const FooterContent = styled.div``;
const FooterLinkContainer = styled.div`
	width: 500px;

	@media (max-width: 768px) {
		width: 100%;
		margin-left: 10px;
		align-contents: center;
	}
`;

const FooterLinkTitle = styled.h1`
	color: gray;
	font-size: 18px;

	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const FooterLinkContent = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 35px 0 40px 0;

	@media (max-width: 768px) {
		margin-top: 26;
	}
`;

const FooterLink = styled.a`
	color: gray;
	font-size: 15px;
	width: 110px;
	height: 40px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		margin-bottom: 16px;
		height: 20px;
		font-size: 14px;
	}
`;

const FooterDescContainer = styled.div`
	margin-top: 30px;
	@meida (max-width: 768px) {
		margin-top: 20px;
	}
`;

const FooterDescRights = styled.h2`
	color: white;
	font-size: 16px;
	text-align: center;
`;
