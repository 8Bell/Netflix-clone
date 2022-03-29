import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Footer.css';
import Nav from './Nav';

export default function Footer({ isLogIn }) {
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();

	const handleChange = (e) => {
		setSearchValue(e.target.value);
		navigate(`/search?q=${e.target.value}`);
	};

	return (
		<>
			{isLogIn && (
				<div className='footer__inputs'>
					<div className='footer__searchbar'>
						<input
							value={searchValue}
							onChange={handleChange}
							className='footer__input'
							type='text'
							placeholder='Search'
						/>
						<img
							src='https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png'
							className='footer__inputIcon'
							alt=''
						/>
					</div>
				</div>
			)}
			<div className='FooterContainer'>
				<div className='FooterLinkContainer'>
					<div className='FooterLinkTitle'>넷플릭스 대한민국</div>
					<div className='FooterLinkContent'>
						<div
							className='FooterLink'
							href='https://help.netflix.com/ko/node.412'>
							넷플릭스 소개
						</div>
						<div className='FooterLink' href='https://help.netflix.com/ko'>
							자주 묻는 질문
						</div>
						<div className='FooterLink' href='https://help.netflix.com/ko'>
							고객 센터
						</div>
						<div className='FooterLink' href='https://help.netflix.com/ko'>
							미디어 센터
						</div>
						<div className='FooterLink' href='https://help.netflix.com/ko'>
							입사 정보
						</div>
						<div className='FooterLink' href='https://help.netflix.com/ko'>
							이용 약관
						</div>
						<div className='FooterLink' href='https://help.netflix.com/ko'>
							개인 정보
						</div>
						<div className='FooterLink' href='https://help.netflix.com/ko'>
							회사 정보
						</div>
						<div className='FooterLink' href='https://fast.com'>
							속도 테스트
						</div>
						<div className='FooterLink' href='https://help.netflix.com/ko'>
							쿠키 설정
						</div>
						<div className='FooterLink' href='https://help.netflix.com/ko'>
							법적 고지
						</div>
						<div className='FooterLink' href='https://help.netflix.com/ko'>
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
		</>
	);
}
