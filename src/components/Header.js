import "../styles/header.css";

const Header = () => {

	return (
		<header>
			<div className="business-headline">
				<span>802 WINDOW CLEANING</span>
			</div>
			<div className="navigation-routes">
				<a href="">Home</a>
				<a href="">About</a>
				<a href="">FAQS</a>
				<a href="">Contact</a>
			</div>
		</header>
	);
}

export default Header;