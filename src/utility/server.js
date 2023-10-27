import Swal from "sweetalert2";
const url = "https://b8a10-brandshop-server-side-nasif-ahmed.vercel.app";

const server = {
    addData: (data) => {
        fetch(`${url}/addCar`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Data added successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    },
    addToCart: (data) => {
        fetch(`${url}/addToCart`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Added to cart successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    },

    deleteCartItem: (item, owner) => {},
    updateData: (id, data) => {
        fetch(`${url}/UpdateProduct/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Data updated successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    },
    getAll: () => {
        fetch(`${url}/getCar`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // Process the retrieved data as needed
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    },
    getBrand: (brand_name) => {},
};

export default server;
