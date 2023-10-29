import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import server from "../utility/server";

const ProductDetails = () => {
    const { user } = useContext(AuthContext);

    const { product } = useParams();

    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://b8a10-brandshop-server-side-nasif-ahmed.vercel.app/getProduct/${product}`,
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
                setProductData(data[0]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleClick = () => {
        productData.owner = `${user.email}`;
        server.addToCart(productData);
        console.log(`Addint this to cart ${productData}`);
    };

    return (
        <>
            {loading && (
                <div className="my-52 flex justify-center">
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
            )}

            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure>
                    <img src={productData.img_url} className="max-h-96" />
                </figure>
                <div className="card-body">
                    <p className="text-center font-bold text-2xl">
                        {productData.desc}
                    </p>
                    <h2 className="card-title">Name : {productData.name}</h2>
                    <h2 className="card-title">
                        Brand: {productData.brand_name}
                    </h2>
                    <h2 className="card-title">Type: {productData.type}</h2>
                    <h2 className="card-title">Price: ${productData.price}</h2>
                    <h2 className="card-title">Rating: {productData.rating}</h2>
                    <div className="card-actions justify-center">
                        <button
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
