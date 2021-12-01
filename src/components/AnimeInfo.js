import React from "react";
import { Link } from 'react-router-dom';

const AnimeInfo = (props)=>{
    return(
        <div>
            <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h1 className="display-6 fw-bolder">{props.quote.quote}</h1>
                        <div className="fs-5 mb-5">
                        </div>
                        <p className="lead">{props.quote.character}</p>
                        <div className="d-flex">
                            <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                                <i className="bi-cart-fill me-1"></i>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default AnimeInfo;