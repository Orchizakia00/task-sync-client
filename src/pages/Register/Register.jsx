import Lottie from "lottie-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import animation from '../../assets/animations/register-Animation - 1703140395156.json';
import Button from "../../components/Button/Button";
import useAuth from "../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const {createUser, updateUserProfile} = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.target;

        // const photoInput = form.photo.files[0];
        const photoInput = form.querySelector('input[type="file"]').files[0];

        const formData = new FormData();
        formData.append('image', photoInput);
        fetch(image_hosting_api, {
            method: 'POST', body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log('imgData', imgData);

                    const name = form.name.value;
                    const email = form.email.value;
                    const password = form.password.value;

                    const data = {
                        name,
                        photo: imgData.data.display_url,
                        email,
                        password
                    };

                    console.log(data);

                    if (password.length < 6) {
                        toast.error('Password should be at least 6 characters or longer!');
                        return;
                    }
                    else if (!(/[A-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password))) {
                        toast.error('Your password should have at least one uppercase letter and a special character.');
                        return;
                    }

                    createUser(email, password)
                        .then(result => {
                            const loggedUser = result.user;
                            console.log(loggedUser);
                            updateUserProfile(data.name, data.photo)
                                .then(() => {
                                    console.log('user profile updated successfully');
                                    const userInfo = {
                                        name: data.name,
                                        email: data.email,
                                        photo: data.photo,
                                    }
                                    console.log(userInfo);
                                    toast.success('User created successfully!')
                                    navigate('/dashboard');
                                })
                        })
                }
            });
    }

    return (
    <div className="bg-base-200 lg:w-full mx-auto">
        <h2 className="text-5xl text-purple-600 font-bold text-center mb-5 pt-2">Register Now</h2>
        <div className="hero min-h-[calc(100vh-80px)]">
            <div className="hero-content flex-col lg:flex-row gap-40 justify-between">
                <Lottie loop={true} size={200} animationData={animation}></Lottie>
                <div className="card  shadow-2xl bg-base-100 flex-1">
                    <form onSubmit={handleRegister} className="card-body w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
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
                            <Button text={'Register'}></Button>
                        </div>
                        <p className="text-center mt-2">Already have an account? Please <Link to={'/login'}><span className="font-bold text-purple-600">Login</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;