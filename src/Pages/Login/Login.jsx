
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../components/Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/socialLogin/SocialLogin';
const Login = () => {
    
    const [disable,setDisable]=useState(true);
    const {loginUser}=useContext(AuthContext);
    const navigate=useNavigate()
    const location=useLocation();

    const from=location.state?.from?.pathname || "/"

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])


const handleLogin =(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email ,password);
    loginUser(email,password)
    .then(res=>{
        console.log(res.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from,{replace:true})
    })
}

const handleValidateCaptcha=(e)=>{
    const captchaValue=e.target.value
    console.log(captchaValue);
    if (validateCaptcha(captchaValue)===true) {
        setDisable(false)
    }
    else{
        setDisable(true)
    }
}
console.log(disable);



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>


            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
           
              <input
              onBlur={handleValidateCaptcha}
           
              name="captcha"
                type="text"
                placeholder="Type the captcha"
                className="input input-bordered"
                required
              />
              
                

             
            </div>
            <div className="form-control mt-6">
             
              <input disabled={disable}  className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
         <div className='p-4'> <SocialLogin></SocialLogin></div>
          <Link to={"/register"}>New here ? Create e new account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
