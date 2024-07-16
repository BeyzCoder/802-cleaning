import "../styles/landing.css";
import windowClean from "../images/window-cleaning-service.jpg";
// import bubbleBackground from "../images/water-bubble-background.webp";
import bubbleBackground from "../images/blue-bubble-background.png";

const Landing = () => {

	return (
		<section className="hero-section">
			<div className="center-con">
				<div className="headline-container">
					<div className="slogan-line">
						<h1>PURE WATER SPARKLY CLEANING WINDOW</h1>
					</div>
					<div className="desc">
						<p>
							We have the proper equipment to clean your window efficiently.
							Even the top windows, 802 will get the job done. Make an inquiry now!
						</p>
					</div>
					<div className="social-contacts">
						<ul>
							<li>Facebook</li>
							<li>Instagram</li>
							<li>Twitter</li>
						</ul>
					</div>
				</div>
				<img src={bubbleBackground} className="bubble-left" />
				<img src={bubbleBackground} className="bubble-right" />
			</div>
			<div className="headline-image">
				<img src={windowClean} className="landing-img" />
			</div>
		</section>
	);
}

export default Landing;