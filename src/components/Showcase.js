import showcase1 from "../images/showcase-1.jpg";
import showcase2 from "../images/showcase-2.jpg";
import showcase4 from "../images/showcase-4.jpg";
import showcase5 from "../images/showcase-5.jpg";
import showcase7 from "../images/showcase-7.jpg";
import showcase8 from "../images/showcase-8.jpg";
import showcase9 from "../images/showcase-9.jpg";
import showcase10 from "../images/showcase-10.jpg";
import "../styles/showcase.css";

const Showcase = () => {

    return (
        <section className="showcase-section">
            <div className="showcase-title">
                <h2>Our Work Gallery</h2>
            </div>
            <div className="gallery-container">
                <div className="slider-track">
                    <div className="slide">
                        <img src={showcase5} />
                    </div>
                    <div className="slide">
                        <img src={showcase9} />
                    </div>
                    <div className="slide">
                        <img src={showcase1} />
                    </div>
                    <div className="slide">
                        <img src={showcase7} />
                    </div>
                    <div className="slide">
                        <img src={showcase2} />
                    </div>
                    <div className="slide">
                        <img src={showcase8} />
                    </div>
                    <div className="slide">
                        <img src={showcase4} />
                    </div>
                    <div className="slide">
                        <img src={showcase10} />
                    </div>
                </div>
                <div className="slider-track">
                    <div className="slide">
                        <img src={showcase5} />
                    </div>
                    <div className="slide">
                        <img src={showcase9} />
                    </div>
                    <div className="slide">
                        <img src={showcase1} />
                    </div>
                    <div className="slide">
                        <img src={showcase7} />
                    </div>
                    <div className="slide">
                        <img src={showcase2} />
                    </div>
                    <div className="slide">
                        <img src={showcase8} />
                    </div>
                    <div className="slide">
                        <img src={showcase4} />
                    </div>
                    <div className="slide">
                        <img src={showcase10} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Showcase;