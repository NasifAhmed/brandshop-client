import React from "react";

const BrandCard = ({ name, img_url }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={img_url} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default BrandCard;
