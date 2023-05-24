import "./homepage.css"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import SideBar from "../components/side/SideBar";
import Content from "../components/content/Content";

function HomePage() {

    return (

        <div id = "homePage">
            <NavBar />
            <div id = "main">
                <Content />
                <SideBar />
            </div>
        </div>
    );
}

export default HomePage;