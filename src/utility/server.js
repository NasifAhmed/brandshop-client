import Swal from "sweetalert2";
const url = "http://localhost:5000";

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
};

export default server;
