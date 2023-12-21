import Lottie from "lottie-react";
import Button from "../../components/Button/Button";
import animation from "../../assets/animations/login-Animation - 1703139684108.json"
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";

const Login = () => {
    const { signInUser, signInWithGoogle } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const axios = useAxios();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
                toast.success('Logged In Successfully!');
            })
            .catch(error => {
                setError(error.message);
                toast.error('Invalid Email or Password!!');
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }
                // Send user data to the server
                axios.post('/users', userInfo)
                    .then(res => {
                        if (res.data.message === 'user already exist') {
                            toast.success('Logged In Successfully!');
                            navigate('/dashboard');
                        } else {
                            toast.success('User Created Successfully!');
                            navigate('/dashboard');
                        }
                    })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="bg-base-200 lg:w-full mx-auto">
            <h2 className="text-5xl text-purple-600 font-bold text-center mb-5 pt-2">Login Now</h2>
            <div className="hero min-h-[calc(100vh-80px)]">
                <div className="hero-content flex-col lg:flex-row gap-40 justify-between">
                    <Lottie loop={true} size={200} animationData={animation}></Lottie>
                    <div className="card  shadow-2xl bg-base-100 flex-1">
                        <form onSubmit={handleLogin} className="card-body w-96">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <Button text={'Login'}></Button>
                                <button onClick={handleGoogleSignIn} className="btn mt-3"><FcGoogle></FcGoogle> Continue with Google</button>
                            </div>
                            <p className="mb-6 text-center"> {error} </p>
                            <p className="text-center mt-2">Do not have an account? Please <Link to={'/register'}><span className="font-bold text-purple-600">Register</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;