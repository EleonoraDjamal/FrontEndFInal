import React from "react";
import { Link } from "react-router-dom";

function AnimeList(props){
    return(
        <div>
            <div className="col mb-5">
                    <div className="card h-100">
                        <div className="card-body p-4">
                            <div className="text-center">                                            
                            <h5 className="fw-bolder">{props.quote.anime}</h5>
                            {props.quote.character}
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={`/info/${props.quote.anime}`}>View Quote</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeList;