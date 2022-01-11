import Canyonlands from "../../assets/canyonlands.jpg";
import "./about.scss";

function About() {
  return (
    <div id="about">
      <div className="about-section">
        <div className="section-header">About</div>
        <img src={Canyonlands} alt="A selfie from Canyonlands National Park" />
      </div>
      <div className="arrow-down" />
    </div>
  );
}

export default About;
