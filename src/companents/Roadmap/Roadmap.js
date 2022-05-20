import "./Roadmap.css";
import {BsBookmarkCheck} from 'react-icons/bs';
import {BsBookmark} from 'react-icons/bs';
// import { ReactComponent as WorkIcon } from "./work.svg";
// import { ReactComponent as SchoolIcon } from "./school.svg";

import Roadmapdata from "./Roadmapdata";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

  
  function App() {
    let workIconStyles = { background: "#D9534F" };
    let schoolIconStyles = { background: "#D9534F" };
   
  
    return (
      <div className="Roadmap" id="Roadmap">
        <h1 className="title">MIRA Roadmap</h1>
        <VerticalTimeline>
          {Roadmapdata.map((element) => {
            let isMarkIcon = element.icon === "mark";
            // let showButton =
            //   element.buttonText !== undefined &&
            //   element.buttonText !== null &&
            //   element.buttonText !== "";
  
            return (
              <VerticalTimelineElement
                key={element.key}
                // date={element.date}
                // dateClassName="date"
                iconStyle={isMarkIcon ? workIconStyles : schoolIconStyles}
                icon={isMarkIcon ? <BsBookmarkCheck /> : <BsBookmark />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description1}</p>
                <p id="description">{element.description2}</p>
                <p id="description">{element.description3}</p>
                {/* {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )} */}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      
    );
  }
  
  export default App;
