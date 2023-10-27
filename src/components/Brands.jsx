import React, { useState } from "react";
import BrandCard from "./BrandCard";
import { Link, useLoaderData } from "react-router-dom";

const Brands = () => {
    const rawData = useLoaderData();

    console.log(rawData);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center my-40">
            {rawData.map((brand) => (
                <Link to={`/Product/${brand.name}`}>
                    <BrandCard
                        name={brand.name}
                        img_url={brand.img_url}
                    ></BrandCard>
                </Link>
            ))}
        </div>
    );
};

export default Brands;
