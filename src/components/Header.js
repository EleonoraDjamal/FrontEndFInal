import React from "react";

function Header(){
    return(
        <div>
            <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Konichiwa</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Here are the list of Motivational Anime Quotes</p>
                </div>
            </div>
        </header>
        </div>
    );
}

export default Header;