import React from "react";

const BrandCard = ({ name, img_url }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl pt-10">
            <figure>
                <img src={img_url} className="max-h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title self-center">{name}</h2>
            </div>
        </div>
    );
};

export default BrandCard;
