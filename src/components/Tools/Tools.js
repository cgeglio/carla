import "./tools.scss";

function Tools() {
  return (
    <div id="tools">
      <div className="tools-section">
        <div className="section-header">Tools & Tech</div>
        <div className="section-text">
          <div className="experience">
            <div className="text-header">More Experience:</div>
            <div className="tool-icons">
              <i class="devicon-javascript-plain"></i>
              <i class="devicon-css3-plain-wordmark"></i>
              <i class="devicon-html5-plain-wordmark"></i>
              <i class="devicon-react-original-wordmark"></i>
              <i class="devicon-redux-original"></i>
              <i class="devicon-jquery-plain-wordmark"></i>
              <i class="devicon-less-plain-wordmark"></i>
              <i class="devicon-sass-original"></i>
              <i class="devicon-vscode-plain"></i>
              <i class="devicon-git-plain-wordmark"></i>
              <i class="devicon-illustrator-plain"></i>
              <i class="devicon-xd-plain"></i>
            </div>
          </div>
          <div className="experience">
            <div className="text-header">Some Experience:</div>
            <div className="tool-icons">
              <i class="devicon-typescript-plain"></i>
              <i class="devicon-jest-plain"></i>
              <i class="devicon-mocha-plain"></i>
              <i class="devicon-d3js-plain"></i>
              <i class="devicon-tailwindcss-plain"></i>
              <i class="devicon-figma-plain"></i>
            </div>
            <div className="end-text">And always learning more!</div>
          </div>
        </div>
      </div>
      <div className="arrow-down" />
    </div>
  );
}

export default Tools;
