import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component


const AntiguoHome = () => {
    let random = Math.floor(Math.random() * 2)

    return (
        <div className="">
            <h1 className="text-center mt-5">{random ? "Hello" : "Bye"} Rigo! </h1>
            <p>
                <img src={rigoImage} />
            </p>
            <a href="#" className="btn btn-success">
                If you see this green button... bootstrap is working...
            </a>
            <p>
                Made by{" "}
                <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
                love!
            </p>

        </div >

    );
};

export default AntiguoHome;