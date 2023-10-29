import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = () => {
    const { brand } = useParams();
    const [brandData, setBrandData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://b8a10-brandshop-server-side-nasif-ahmed.vercel.app/getBrand/${brand}`,
            // `http://localhost:5000/getBrand/${brand}`,
            {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                // Process the retrieved data as needed
                console.log(data);
                setLoading(false);
                setBrandData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <Slider></Slider>
            {loading && (
                <div className="my-52 flex justify-center">
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
            )}
            {!loading && brandData.length === 0 && (
                <div>
                    <h1 className="text-4xl my-52 text-center">
                        No Product Available
                    </h1>
                </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10">
                {brandData.map((brand) => (
                    <div className="card card-compact w-96 bg-base-100 shadow-xl w-full">
                        <figure>
                            <img src={brand.img_url} className="max-h-72" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Name : {brand.name}</h2>
                            <h2 className="card-title">
                                Brand: {brand.brand_name}
                            </h2>
                            <h2 className="card-title">Type: {brand.type}</h2>
                            <h2 className="card-title">
                                Price: ${brand.price}
                            </h2>
                            <h2 className="card-title">
                                Rating: {brand.rating}
                            </h2>
                            <div className="card-actions justify-between">
                                <Link to={`/ProductDetails/${brand.name}`}>
                                    <button className="btn btn-primary">
                                        Details
                                    </button>
                                </Link>
                                <Link to={`/UpdateProduct/${brand._id}`}>
                                    <button className="btn btn-primary">
                                        Update
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
