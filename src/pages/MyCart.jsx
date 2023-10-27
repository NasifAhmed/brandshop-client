import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const MyCart = () => {
    const { user } = useContext(AuthContext);

    const [myCart, setMyCart] = useState([]);
    const [deleteCount, setDeleteCount] = useState([]);

    useEffect(() => {
        fetch(
            `https://b8a10-brandshop-server-side-nasif-ahmed.vercel.app/getCart/${user.email}`,
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
                setMyCart(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleDelete = (id) => {
        fetch(
            `https://b8a10-brandshop-server-side-nasif-ahmed.vercel.app/deleteCartItem/${user.email}/${id}`,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    fetch(
                        `https://b8a10-brandshop-server-side-nasif-ahmed.vercel.app/getCart/${user.email}`,
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
                            setMyCart(data);
                            Swal.fire(
                                "Deleted!",
                                "Cart item has been deleted.",
                                "success"
                            );
                        })
                        .catch((error) => {
                            console.error("Error fetching data:", error);
                        });
                }
            });
        console.log(`Deleting ${id}`);
    };

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10">
                {myCart.map((brand) => (
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
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleDelete(brand._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCart;
