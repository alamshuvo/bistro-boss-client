import { useForm } from "react-hook-form";
import Helmeta from "../../components/Hemlmet/Helmet";
import { useContext } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import SocialLogin from "../../components/socialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic=UseAxiosPublic()
    const {createUser,updateUserProfile}=useContext(AuthContext);
    const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .then(res=>{
        const logdUser=res.user
        console.log(logdUser);
        updateUserProfile(logdUser.name,logdUser.photoURL)
        .then(() => {
          const userInfo={
            name:data.name,
            email:data.email
          }
          axiosPublic.post("/users",userInfo)
          .then(res=>{
            if (res.data.insertedId) {
              Swal.fire({
                title: "User created Successfully ",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              reset();
              navigate("/")
            }
          })
          // Profile updated!
          // ...
         
        }).catch((error) => {
          // An error occurred
          // ...
        });
       
    })
  };
  console.log(watch("name"));
  return (
   <>
   <Helmeta title={"Sign Up"}></Helmeta>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">SignUp!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    {...register("email")}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    {...register("name", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.name && <span>Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">photo URl</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo"
                    name="photo"
                    {...register("photo", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.photo && <span>Photo Url is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
    
                  {/* password validation */}
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-500 font-bold">
                      password must be 6 char
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500 font-bold">
                      password must have a 20 char
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500 font-bold">
                      password must be 6 char
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500 font-bold">
                      password must have one upeercase one lowar case one number and
                      one special char
                    </p>
                  )}
    
                  {/* password validation end  */}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="signUp" />
                </div>
              </form>
             <div className="p-4">
             <div>
                  <SocialLogin></SocialLogin>
                </div>
                <div>
                 <span>already have an account</span> <Link to={'/login'}>login here </Link>
                </div>
              
             </div>
            </div>
          </div>
        </div>
   </>
  );
};

export default SignUp;
