import React, { useState } from "react";
import BrandCard from "./BrandCard";
import { useLoaderData } from "react-router-dom";

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

    const rawData = useLoaderData();
    // const [data, setData] = useState(rawData);

    console.log(rawData);
    // console.log(
    //     fetch("../data.json")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data[1]);
    //         })
    // );

    return (
        <div className="grid grid-cols-3 gap-5 justify-center items-center my-40">
            {rawData.map((brand) => (
                <BrandCard
                    name={brand.name}
                    img_url={brand.img_url}
                ></BrandCard>
            ))}
        </div>
    );
};

export default Brands;
