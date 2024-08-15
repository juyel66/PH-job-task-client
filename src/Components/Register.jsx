import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import  { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const {email, password }  = data;
    createUser(email, password)
    .then(result =>{
        console.log(result.user)
        toast.success("User Create successful")
        navigate(location?.state ? location.state : "/");
        
    })

    .catch(error => {
        console.error(error.message)
        toast.error('This email already Exist')
    })


    
    console.log(data);
}

    return (
        <div>
              <div className="min-h-screen flex justify-center items-center">
            <div className="  bg-base-200  py-40 rounded-xl">
                <div className="lg:flex   gap-x-10 lg:flex-row-reverse px-10 py-5 ">
                    <div className="  w-full max-w-xl ">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input {...register("fullName", { required: true })} name="fullName"  type="text" placeholder="full name" className="input input-bordered"  />
                                {errors.fullName && <span className="text-red-600">This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input {...register("phoneNumber", { required: true })} name="phoneNumber" type="text" placeholder="phone nubmer" className="input input-bordered"  />
                                {errors.phoneNumber && <span className="text-red-600">This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} name="email" type="email" placeholder="email" className="input input-bordered"  />
                                {errors.email && <span className="text-red-600">This field is required</span>}

                            </div>
                   
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} name="password" type="password" placeholder="password" className="input input-bordered"  />
                                {errors.password && <span className="text-red-600">This field is required</span>}

                            </div>

                            <div className="form-control mt-4 col-span-2 flex justify-center items-center">
                                <button className="btn btn-primary w-full">Register</button>
                            </div>
                        </form>

                        
                        <div className="space-y-2">
                    <button  className="btn w-full btn-outline lg:text-[18px] text-[15px] mt-4 "> <FcGoogle></FcGoogle>  Sign in with google</button>
                    {/* <button onClick={() => handleGithubLogin()} className="btn btn-outline text-[18px] "> <FaGithub></FaGithub>  Sign in with Github</button> */}
                  </div>

                    </div>
                    <div className="text-center lg:text-left max-w-2xl mt-5">
                        <div>

                            <h1 className="text-5xl font-bold text-primary">ShopSmart </h1>
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">
                            Create an account to unlock a personalized shopping experience. Register now and start exploring the best deals and products tailored just for you!

                          
                            </p>
                        </div>

                        <div>
                            <p>Already have an account ? <Link className="text-primary" to={'/login'}>Login </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Register;