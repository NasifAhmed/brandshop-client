import { Link } from "react-router-dom";
import server from "../utility/server";

const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const img_url = form.get("img_url");
        const name = form.get("name");
        const brand_name = form.get("brand_name");
        const type = form.get("type");
        const price = form.get("price");
        const desc = form.get("description");
        const rating = form.get("rating");
        console.log("THE PRODUCT-------------");
        const newCar = {
            img_url,
            name,
            brand_name,
            type,
            price,
            desc,
            rating,
        };
        console.log(newCar);
        server.addData(newCar);
    };

    return (
        <div>
            <div>
                <h2 className="text-3xl my-10 text-center">Add A Car</h2>
                <form
                    onSubmit={handleSubmit}
                    className=" md:w-3/4 lg:w-1/2 mx-auto"
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input
                            type="url"
                            required
                            name="img_url"
                            placeholder="Image URL"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <input
                            type="text"
                            required
                            name="name"
                            placeholder="Car Name"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input
                            type="text"
                            required
                            name="brand_name"
                            placeholder="Brand Name"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <select className="select select-bordered" name="type">
                            <option disabled selected>
                                Pick a car type
                            </option>
                            <option>SUV</option>
                            <option>Pickup</option>
                            <option>Van</option>
                            <option>Economy</option>
                            <option>Offroad</option>
                            <option>Truck</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="text"
                            required
                            name="price"
                            placeholder="Price"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Short Description
                            </span>
                        </label>
                        <input
                            type="text"
                            required
                            name="description"
                            placeholder="Short description"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <select
                            className="select select-bordered"
                            name="rating"
                        >
                            <option disabled selected>
                                Select a rating for the car
                            </option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                            <option>Poor</option>
                            <option>Bad</option>
                        </select>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">ADD</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
