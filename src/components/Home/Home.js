import { isMobile } from "react-device-detect";
import "./home.scss";

function Home() {
  return (
    <div id="home">
      {!isMobile && <div className="arrow-down" />}
      <div class="home-section">
        <div className="section-header">Hello!</div>
      </div>
    </div>
  );
}

export default Home;
