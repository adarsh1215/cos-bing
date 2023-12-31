import "./homepage.css"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import Main from "./main/Main";
import Watch from "../components/watch/Watch";
import ChannelPage from "../components/channel/ChannelPage";


function HomePage() {

    return (

        <div id = "homePage">
            <NavBar />
            
            <Routes>

                <Route path="*" element = {<Main />} />
                <Route path="/watch" element = {<Watch />} />
                <Route path="/channel" element = { <ChannelPage /> } />
            </Routes>
        </div>
    );
}

export default HomePage;