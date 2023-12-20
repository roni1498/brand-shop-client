import { Link, useNavigate } from "react-router-dom";
import background from "../assets/Slider-4.jpg"
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password =form.get('password')
        const confirmPassword= form.get('confirmPassword')
        console.log(email, password, confirmPassword)

        setRegisterError('')
        setSuccess('')

        if(password.length < 6){
            setRegisterError('password should at least 6 characters or longer')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password Should have at least one capital letter')
            return;
        }
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
            setRegisterError('Your password should have at least one special character')
            return;
        }

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            Swal.fire({
                title: "Good job!",
                text: "Your SignUp Successful!",
                icon: "success"
              });
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            setRegisterError(error.message)
        })
    }

    return (
        <div>
        <div className="relative">
        <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{
       backgroundImage: `url(${background})`,
     }}>
       <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
           <h1 className="text-4xl text-white font-bold text-center mb-6">Sign Up</h1>
           <form onSubmit={handleSignUp}>
           <div className="relative my-4">
               <input className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" type="email" name="email" id="" />
               <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="">Your Email</label>
               <BiUser className="absolute top-4 right-4"></BiUser>
           </div>
           <div className="relative my-4">
               <input className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" type="password" name="password" id="" />
               <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="">Your Password</label>
               <AiOutlineLock className="absolute top-4 right-4"></AiOutlineLock>
           </div>
           <div className="relative my-4">
               <input className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" type="password" name="confirmPassword" id="" />
               <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="">Confirm Password</label>
               <AiOutlineLock className="absolute top-4 right-4"></AiOutlineLock>
           </div>
           <input className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit" value="Sign Up" />
           {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
           <div>
               <span className="m-4">
                   Already Have an Account? <Link to={"/login"} className="text-orange-500 font-semibold">LogIn</Link>
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

export default SignUp;