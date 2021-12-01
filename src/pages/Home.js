import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Anime from "../components/Anime";
import Footer from "../components/Footer";

function Home(){
    return(
            <div>
                <Navigation />
                <Header />
                <Anime />
                <Footer />
            </div>
        );
}

export default Home;