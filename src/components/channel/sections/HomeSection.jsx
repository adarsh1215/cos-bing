// importing style
import "../styles/homeSection.css"

// importing conponents
import Preview from "../../preview/preview.jsx"

function HomeSection({ channelVideos, channelDetail }) {

    console.log(channelVideos);

    return (

        <div className="homeSection">
            { channelVideos ?

                channelVideos.map((video, idx) => {

                    video.channelThumbnail = channelDetail.thumbnail;
                    video.channelTitle = channelDetail.title;

                    return ( <Preview key={idx} data = {video} /> )
                }): null
            }
        </div>
    );
}

export default HomeSection;