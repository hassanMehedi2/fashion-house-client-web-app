import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import Navbar from "../Shared/Nav/Navbar";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const [visible, setVisible] = useState(false);
    const { createUser,updateUserData, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                toast.success("Login successfully")
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleCreateUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { name, email, password };
        console.log(user);
        // password valudation 

        if (password.length < 6) {
            toast.error('Password must be at lest 6 character !');

            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must have one Capital letter at lest!');
            return
        }
        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
            toast.error('Password must have one special character at lest!');
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                navigate('/')
                toast.success("registered successfully")
                
            
                // adding user data to database 

                // const createdAt = res.user.metadata.creationTime;
                // const userData ={name,email,createdAt};
                // fetch('https://fashion-house-server-web-app.vercel.app/user',{
                //     method: "POST",
                //     headers: {
                //         'content-type' : 'application/json'
                //     },
                //     body: JSON.stringify(userData)
                // })
                // .then(res=>res.json())
                // .then(data => {
                //     console.log(data);
                //     console.log('user saved to database');
                // })

                // updating the name and photo
                updateUserData(name,photo)
                .then(res=>{
                    console.log(res);
                    
                })
                .catch(error=>{
                    console.log(error);
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex mt-0 md:mt-5 mx-auto card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleCreateUser} className="card-body">
                    <div>
                        <h2 className="text-xl md:text-3xl font-semibold mt-5 mb-3 text-center">Please Register</h2>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <div className="relative">
                            <input
                                type={visible ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input w-full input-bordered" required />
                            <button onClick={() => setVisible(!visible)} className="absolute text-lg right-4 top-4">
                                {
                                    visible ? <FaEyeSlash ></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    {/* social media  */}
                    <div className=' '>
                        <div className="flex  p-2 justify-center items-center">
                            <Link onClick={handleGoogleLogin} className="flex gap-3 justify-center items-center"><FcGoogle className="text-center text-xl " /> <p className="font-semibold text-sm md:text-base text-green-600">Continue with Google</p></Link>
                        </div>
                        <div className="flex  p-2 mt-4 mb-4 justify-center items-center">
                            <Link onClick={() => { }} className="flex gap-3 justify-center items-center"><FaGithub className="text-center text-xl" /> <p className="font-semibold text-sm md:text-base text-green-600">Continue with Github</p></Link>
                        </div>
                    </div>
                    <div className="my-2">
                        <p>Allready have an account ? <Link to={'/login'} className="text-blue-600">Login</Link></p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;