import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import './Footer.css'
import Nav from './Nav';


export default function Footer() {

    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
      }

  return (
      <>
      <Nav ssv={setSearchValue}/>
      <div className='footer'>
       <div className='footer__inputs'>
        <input value={searchValue} onChange={handleChange} className='footer__input' type='text' placeholder='Search'/>
        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" className='footer__inputIcon'/>
        </div>
      </div>
    <FooterContainer>
<FooterContent>
<FooterLinkContainer>
    <FooterLinkTitle>
        넷플릭스 대한민국
    </FooterLinkTitle>
    <FooterLinkContent>
        <FooterLink href="https://help.netflix.com/ko/node.412">넷플릭스 소개</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">자주 묻는 질문</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">고객 센터</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">미디어 센터</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">입사 정보</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">이용 약관</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">개인 정보</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">회사 정보</FooterLink>
        <FooterLink href="https://fast.com">속도 테스트</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">쿠키 설정</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">법적 고지</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">문의 하기</FooterLink>

    </FooterLinkContent>
    <FooterDescContainer>
        <FooterDescRights>
            Netflix 2022 Rights Resverd.
        </FooterDescRights>
    </FooterDescContainer>
</FooterLinkContainer>
</FooterContent>
    </FooterContainer>
      </>
  )
}

const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 40px 0;
border-top: 1px solid rgb(25,25,25);
width: 100%
position: relative;
z-imdex: 100;

@media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
}
`;

const FooterContent = styled.div``;
const FooterLinkContainer = styled.div`
width: 500px;

@media (max-width: 768px) {
    width:100%;

}
`;

const FooterLinkTitle = styled.h1`
color: gray;
font-size: 18px;
`;

const FooterLinkContent = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 35px 0 40px 0;

@media (max-width: 768) {
    margin-top: 26;
}
`;

const FooterLink = styled.a`
color: gray;
font-size:15px;
width: 110px;
height: 40px;
text-decoration: none;

&:hover {
    text-decoration: underline;
}

@media (max-width:768px) {
    margin-bottom: 16px;
    height: 20px;
}
`;

const FooterDescContainer = styled.div`
margin-top: 30px;
@meida(max-width: 768px) {
    margin-top: 20px;
}
`;

const FooterDescRights = styled.h2`
color: white;
font-size: 16px;
text-align: center;
margin-bottom: 10px;
`
