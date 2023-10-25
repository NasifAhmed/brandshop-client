import React from "react";
import BrandCard from "./BrandCard";

const Brands = () => {
    const brands = [
        {
            name: "Toyota",
            img_url: "../../tt.png",
        },
        {
            name: "Toyota",
            img_url: "../../tt.png",
        },
        {
            name: "Toyota",
            img_url: "../../tt.png",
        },
        {
            name: "Toyota",
            img_url: "../../tt.png",
        },
        {
            name: "Toyota",
            img_url: "../../tt.png",
        },
        {
            name: "Toyota",
            img_url: "../../tt.png",
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-5">
            {brands.map((brand) => (
                <BrandCard
                    name={brand.name}
                    img_url={brand.img_url}
                ></BrandCard>
            ))}
        </div>
    );
};

export default Brands;
