import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";

import Navbar from "../Shared/Nav/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const [visible, setVisible] = useState(false);
    const {loginUser,googleLogin} = useContext(AuthContext);

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(res =>{
            console.log(res.user);
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password };
console.log(user);
        // password valudation 

        if (password.length < 6) {
            toast.error('Password must be at lest 6 character !');
   
            return;
         }
         if ( !/[A-Z]/.test(password)) {
            toast.error('Password must have one Capital letter at lest!');
           return
         }
         if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
            toast.error('Password must have one special character at lest!');
           return;
         }

         loginUser(email,password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex mt-0 md:mt-5 mx-auto card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div>
                        <h2 className="text-3xl font-semibold mt-5 mb-3 text-center">Please Login</h2>
                    </div>
                    <div>
                        <div className="flex outlined outline-double rounded-2xl p-2 justify-center items-center">
                            <Link onClick={ handleGoogleLogin} className="flex gap-3 justify-center items-center"><FcGoogle className="text-center text-xl " /> <p className="font-semibold text-sm md:text-base text-green-600">Continue with Google</p></Link>
                        </div>
                        <div className="flex outlined outline-double rounded-2xl p-2 mt-4 mb-4 justify-center items-center">
                            <Link onClick={() => { }} className="flex gap-3 justify-center items-center"><FaGithub className="text-center text-xl" /> <p className="font-semibold text-sm lg:text-base text-green-600">Continue with Github</p></Link>
                        </div>
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
                                type={visible? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input w-full input-bordered" required />
                            <button onClick={()=>setVisible(!visible)} className="absolute text-lg right-4 top-4">
                                {
                                    visible ? <FaEyeSlash ></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                            <label className="label ">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button  className="btn btn-primary">Login</button>
                    </div>
                    <div className="my-2">
                        <p>Don not have an account ? <Link to={'/register'} className="text-blue-600">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;