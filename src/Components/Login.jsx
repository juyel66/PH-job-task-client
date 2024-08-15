import { Link, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { FcGoogle } from "react-icons/fc";

import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";


const Login = () => {




    const { googleLogin, signInUser } = useContext(AuthContext);
    const navigate = useNavigate(); // useNavigate হুক যোগ করা হলো

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                toast.success('google login successful');
                navigate(location?.state?.from || "/", { replace: true }); // Use navigate for redirection
            })
            .catch(error => {
                console.error(error);
                toast.error('Firebase google Login Problem');
            });
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data =>{
    const {email, password} = data; 
    signInUser(email, password)
    .then(result => {
        console.log(result.user); 

           // navigate after user 
           navigate(location?.state ? location.state : "/")
        toast.success('Google login success')
    })

    .catch(error =>{
        console.error(error.message);
        toast.error('Invalid User and password')
    })


    console.log(data);

  } 







    
    
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="  bg-base-200   rounded-xl">
                    <div className="lg:flex   gap-5 lg:flex-row-reverse px-20  ">

                      

                        <div className="lg:flex items-center justify-center mt-10  lg:pr-10 lg:pl-10">
                           

                            <div className="  w-full   ">
                                <form onSubmit={handleSubmit(onSubmit)} className="" >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text  ">Email</span>
                                        </label>
                                        <input {...register("email", { required: true })} name="email" type="email" placeholder="Email" className="input lg:w-[550px] input-bordered"  />
                                        {errors.email && <span className="text-red-600">This field is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                        
                                         {...register("password", { required: true })} name="password" type="password" placeholder="password" className="input input-bordered"  />
                                        {errors.password && <span className="text-red-600">This field is required</span>}

                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                        
                                    </div>
                                </form>


                                <div className="space-y-2">
                    <button  onClick={() => handleGoogleLogin()}  className="btn w-full btn-outline lg:text-[18px] text-[15px] mt-4 "> <FcGoogle></FcGoogle>  Sign in with google</button>
                   
                  </div>


                  


                                <div>
                                <p className="font-bold">Do not  have any account ? <Link className="text-primary" to={'/register'}>Register </Link></p>
                            </div>
                            </div>
                            <div className="flex-1 lg:hidden">
                                <Player
                                    autoplay
                                    loop
                                    src="https://lottie.host/d5e3a9d5-0b05-42e1-a2c6-754f3098fb5d/EOm0Yf6XId.json"
                                    style={{ height: "300px", width: "200px" }}
                                ></Player>
                            </div>
                            <div className="lg:flex hidden">
                                <Player
                                    autoplay
                                    loop
                                    src="https://lottie.host/d5e3a9d5-0b05-42e1-a2c6-754f3098fb5d/EOm0Yf6XId.json"
                                    style={{ height: "600px", width: "600px" }}
                                ></Player>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;