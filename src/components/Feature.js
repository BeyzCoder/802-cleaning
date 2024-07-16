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
                    <p>After the rain, does your windows leaves a lot of rain stops to tired to remove.</p>
                </div>
            </div>
            <div className="solution-title">
                <h2>We have the efficient and effective equipments!</h2>
            </div>
            <div className="equipment-images">
                <div className="equipment-details">
                    <img src={filterEquip} className="equipment-image" />
                    <p>We got a filter tank that makes water pure that leaves no stains.</p>
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
        </section>
    );
}

export default Feature;