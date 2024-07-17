import dirtWindow from "../images/dirt-window.jpg";
import smudgeWindow from "../images/smudge-window.jpg";
import spotWindow from "../images/spots-dirt.jpg";
import hoseEquip from "../images/hose-window-cleaning.jpeg";
import speedEquip from "../images/speed-brush-window-cleaning.jpg";
import filterEquip from "../images/filter-tank.webp";
import "../styles/feature.css";

const Feature = () => {
    return (
        <section className="feature-section">
            <div className="question-title">
                <h2>Having trouble or tiring removing dirty windows?</h2>
            </div>
            <div className="dirty-window-images">
                <div className="dirt-details">
                    <img src={dirtWindow} className="dirt-image"></img>
                    <p>Has your window not been maintain a long time that cause a lot of dirt.</p>
                </div>
                    <div className="dirt-details">
                <img src={smudgeWindow} className="dirt-image"></img>
                    <p>Are there plenty of finger marks or dust on your window that forgot to clean.</p>
                </div>
                <div className="dirt-details">
                    <img src={spotWindow} className="dirt-image"></img>
                    <p>After the rain, does your windows leaves a lot of rain spots to tired to remove.</p>
                </div>
            </div>
            <div className="solution-title">
                <h2>We have the efficient and effective equipments!</h2>
            </div>
            <div className="equipment-images">
                <div className="equipment-details">
                    <img src={filterEquip} className="equipment-image" />
                    <p>We got a filter tank that makes water pure that leaves no stains when it gets dry.</p>
                </div>
                <div className="equipment-details">
                    <img src={speedEquip} className="equipment-image" />
                    <p>We got brushes that sprays the pure water and long enough to reach high windows.</p>
                </div>
                <div className="equipment-details">
                    <img src={hoseEquip} className="equipment-image" />
                    <p>We got long hose for us to clean large houses.</p>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1721183501">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
}

export default Feature;