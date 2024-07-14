import "../styles/landing.css";
import windowClean from "../images/window-cleaning-service.jpg";

const Landing = () => {

	return (
		<section>
			<div className="headline-container">
				<div className="slogan-line">
					<span className="background-shadow">SPARKLING</span>
					<span className="little-char">CLEANED WINDOW</span>
				</div>
				<div className="desc">
					<p>
						Do you need to quickly clean your window. Don't worry 802 is here
						for you. We have the finest equipment to make your window sparkling cleaned.
						Make a schedule now!
					</p>
				</div>
				<div className="social-contacts">
					<span>Facebook</span>
					<span>Instagram</span>
					<span>Twitter</span>
				</div>
			</div>
			<div className="headline-image">
				<img src={windowClean} />
			</div>
		</section>
	);
}

export default Landing;