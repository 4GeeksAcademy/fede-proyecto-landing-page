import React from "react";


const Card = (props) => {
    return (
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={props.imageUrl} className="card-img-top" alt={props.altImage} />
                <div className="card-body">
                    <h5 className="card-title">{props.catName}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-primary">Adoptar a {props.catName}</a>
                </div>
        </div>
    )
};


export default Card;


/*  */