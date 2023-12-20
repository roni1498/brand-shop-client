import { Link, useLocation, useNavigate } from "react-router-dom";
import background from "../assets/Slider-4.jpg"
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from './../Providers/AuthProvider';
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('')

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password =form.get('password')
        console.log(form.get('email'))

        setLoginError('')
    
        // login user
        login(email, password)
        .then(result => {
            console.log(result.user)
            Swal.fire({
                title: "Good job!",
                text: "You login Successfully!",
                icon: "success"
              });
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.log(error)
            
                setLoginError('An error occurred. Please try again.');
              
        })
    }

    // handle google sign in
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
         console.log(result.user)
         Swal.fire({
            title: "Good job!",
            text: "You login Successfully!",
            icon: "success"
          });
         navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
         console.log(error.message)
         
        })
     }
    return (
        <div>
            <div className="relative">
            <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{
            backgroundImage: `url(${background})`,
          }}>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleLogin}>
                <div className="relative my-4">
                    <input className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" type="email" name="email" required id="" />
                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="">Your Email</label>
                    <BiUser className="absolute top-4 right-4"></BiUser>
                </div>
                <div className="relative my-4">
                    <input className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" type="password" name="password" required id="" />
                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="">Your Password</label>
                    <AiOutlineLock className="absolute top-4 right-4"></AiOutlineLock>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="Remember me">Remember Me</label>
                    </div>
                    <Link className="text-blue-500">Forget Password?</Link>
                </div>
                <input className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit" value="Login" />
                <button onClick={handleGoogleSignIn} className="flex justify-center items-center w-full mb-4 text-[18px]  rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">< FcGoogle/>Google </button>
                {
                    loginError && <p className="text-red-600 mt-6">{loginError}</p>
                }
                <div>
                    <span className="m-4 text-blue-500">
                        New Here? <Link to={"/signUp"} className="text-white font-semibold">Create an Account</Link>
                    </span>
                </div>
                </form>
            </div>
        </div>
            </div>
        <div className="absolute w-full top-0 text-white">
        <Navbar></Navbar>
       </div> 
        </div>
    );
};

export default Login;