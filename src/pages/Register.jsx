import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get("name");
        const photoURL = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photoURL, email, password);
        // reset error
        setError("");
        if (password.length < 6) {
            setError("Error: Password should be 6+ characters long !");
        } else if (/^[^A-Z]*$/.test(password)) {
            setError(
                "Error: Password should have at lease one capital letter !"
            );
        } else if (/^[a-zA-Z0-9]*$/.test(password)) {
            setError(
                "Error: Password should have at lease one special character !"
            );
        }
        if (error === "") {
            createUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    Swal.fire(
                        "Successful !",
                        "User successfully registered !",
                        "success"
                    );
                    updateUser(result.user, name, photoURL)
                        .then(() => {
                            console.log("User profile updated successfully");
                        })
                        .catch((error) => {
                            console.error(
                                "Error updating user profile:",
                                error
                            );
                            setError(error.message);
                        });
                })
                .catch((error) => {
                    console.error(error);
                    setError(error.message);
                });
        }
    };

    return (
        <div>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form
                    onSubmit={handleRegister}
                    className=" md:w-3/4 lg:w-1/2 mx-auto"
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            required
                            name="name"
                            placeholder="Name"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            required
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            required
                            name="password"
                            placeholder="Password"
                            className="input input-bordered"
                        />
                    </div>
                    {error && <p className="text-red-700">{error}</p>}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link className="text-blue-600 font-bold" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
