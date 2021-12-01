import AnimeList from "./AnimeList";
import { useEffect, useState } from "react";



function Anime(){
    const [animes, setAnimes] =  useState([]);
    const [text, setText] = useState('')

    useEffect(() => {
        fetch('https://animechan.vercel.app/api/quotes')
        .then(response => response.json())
        .then(quote => setAnimes(quote))

    }, []);

    const handleChange = e => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://animechan.vercel.app/api/quotes/anime?title=${text}`)
        .then(response => response.json())
        .then(quotes => setAnimes(quotes))
    }

    return(
        <div>
        <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <h2>Search Anime</h2>

                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" onChange={handleChange} value={text} />
                    </form>

                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
                    {animes.map((quote) => <AnimeList key={quote.character} quote={quote} />)}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Anime;