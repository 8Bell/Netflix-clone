import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import './Footer.css'


export default function Footer() {

    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
      }

  return (
      <>
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
        <FooterLink href="https://help.netflix.com/ko">고객 센터</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">미디어 센터</FooterLink>
        <FooterLink href="https://help.netflix.com/ko">이용 약관</FooterLink>

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
font-size: 17px;
`;

const FooterLinkContent = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 35px;

@media (max-width: 768) {
    margin-top: 26;
}
`;

const FooterLink = styled.a`
color: gray;
font-size:14px;
width: 110px;
text-decoration: none;

&:hover {
    text-decoration: underline;
}

@media (max-width:768px) {
    margin-bottom: 16px;
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
font-size: 14px;
text-align: center;
`
