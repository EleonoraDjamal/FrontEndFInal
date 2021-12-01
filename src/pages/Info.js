import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import AnimeInfo from "../components/AnimeInfo";

function Info(){
    const [quote, setQuote] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://animechan.vercel.app/api/quotes/anime?title=${params.animeId}`)
        .then(response => response.json())
        .then(quotes => setQuote(quotes));
    },

    // eslint-disable-next-line
    []);

    return(
        <div>
            <Navigation/>
            <AnimeInfo quote={quote}/>
            <Footer/>
        </div>
    );
}

export default Info;