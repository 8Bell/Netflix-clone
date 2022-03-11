import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css"

export default function Nav() {

const [show, setShow] = useState(false);
const [searchValue, setSearchValue] = useState("")

const navigate = useNavigate()

useEffect(() => {
 window.addEventListener("scroll", () => {
     if(window.scrollY > 50) {
         setShow(true);
     }else{
         setShow(false);
     }
 })

  return () => {
    window.removeEventListener("scroll", () => {});
  }
}, [])

const handleChange = (e) => {
  setSearchValue(e.target.value);
  navigate(`/search?q=${e.target.value}`);
}


  return (
    <nav className= {`nav ${ show && 'nav__black' } `}>     
    {/* = {`${setShow ? 'nav__black' : 'nav'}`} */}
        <img
        alt='Netflix logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png'
        className='nav__logo'
        onClick={() => window.location.reload()}
        />
        <div className='nav__inputs'>
        <input value={searchValue} onChange={handleChange} className='nav__input' type='text' placeholder='Search'/>
        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" className='nav__inputIcon'/>
        </div>
        <img
        alt="User logged"
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        className='nav__avatar'
        />
    </nav>
  )
}
