import React, { useRef } from 'react';
import "../styles/header.css";

const Header = () => {
	const sideBarRef = useRef(null);

	const showSideBar = (event) => {
		event.preventDefault();
		if (sideBarRef.current) 
			sideBarRef.current.style.display = 'flex';
	}

	const closeSideBar = (event) => {
		event.preventDefault();
		if (sideBarRef.current) 
			sideBarRef.current.style.display = 'none';
	}

	return (
		<header>
			<div className="name-container">
				<span className="bus-name">802 WINDOW CLEANING</span>
			</div>
			<nav>
				<ul ref={sideBarRef} className="sidebar">
					<li onClick={closeSideBar}><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#3c3c3c"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
					<li><a href="">Home</a></li>
					<li><a href="">About</a></li>
					<li><a href="">FAQS</a></li>
					<li><a href="">Contact</a></li>
				</ul>
				<ul>
					<li><a href="" className='hideOnMobile'>Home</a></li>
					<li><a href="" className='hideOnMobile'>About</a></li>
					<li><a href="" className='hideOnMobile'>FAQS</a></li>
					<li><a href="" className='hideOnMobile'>Contact</a></li>
					<li className="menu-btn" onClick={showSideBar}><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#3c3c3c"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;