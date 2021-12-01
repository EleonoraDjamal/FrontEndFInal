import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function About(){
    return(
        <div>
            <Navigation/>
            <div className="container">
                <h1>About </h1>

                <br></br>

                <p>Name    :  Eleonora Paula Djamal</p>
                <p>NIM     :  105022010042</p>
                <p>Fakultas:  Ilmu Komputer</p>
                <p>Jurusan :  Informatika</p>
                <br></br>
                <p>This my Front End Final Exam</p>
                <br></br>

            </div>
            <Footer/>
        </div>
    );
}

export default About;