import { Link } from "react-router-dom";

// importing style
import "./styles/channelPageHeader.css"

function ChannelPageHeader({ setActiveSection }) {

    const sections = ["Home", "Playlist", "Post", "About"];

    function handelClick(idx) {


        // alert(`section ${idx}`);
        setActiveSection(idx);
        
    }

    return (

        <div className="channelPageHeader">

            <ul className="channleSectionList">
                {

                    sections.map((section, idx) => {

                        return (

                            <li className="channelSectionItem" key={idx} onClick={() => handelClick(idx) } idx = {0} >
                                <div className="sectionText"> {sections[idx]} </div>
                            </li>
                        ) 
                    })
                }
            </ul>
        </div>
    );
}

export default ChannelPageHeader;