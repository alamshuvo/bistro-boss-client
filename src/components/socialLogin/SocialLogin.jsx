import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {gogleSignIn}=UseAuth();
    const axiosPublic=UseAxiosPublic();
    const navigate=useNavigate()
    const handleGoogleSignIn=()=>{
        gogleSignIn()
        .then(res=>{
            console.log(res.user);
            const userInfo={
                email:res.user?.email,
                name:res.user?.displayName

            }
            axiosPublic.post("/users",userInfo)
            .then(res=>{
                console.log(res.data);
                navigate("/")
            })

        })
    }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn">
       <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
