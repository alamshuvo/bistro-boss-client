
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart";

const FoodCard = ({item}) => {
  console.log(item);
    const {name,image,price,recipe,_id}=item;
    const {user}=UseAuth();
    const navigate=useNavigate();
    const location=useLocation();
    const axiosSucure=UseAxiosSecure();
    const [,refetch]=UseCart()

  const handleCart=(food)=>{
      console.log(food,user?.email);
      if (user && user?.email) {
        // todo:some code added
        const cartItem={
          menuid: _id,
          email:user?.email,
          name,
          image,price
        }
        axiosSucure.post('/carts',cartItem)
        .then(res=>{
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added cart successfully`,
              showConfirmButton: false,
              timer: 1500
            });
            // to update the cart item 
            refetch()
          }
        })
      }
      else{
        Swal.fire({
          title: " you are not login",
          text: "please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "yes login"
        }).then((result) => {
          if (result.isConfirmed) {
          // todo:send the user to the login page 
          navigate("/login",{state:{from:location}})
          }
        });
      }
    }

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
        />
        <p className="bg-slate-900 text-white absolute right-0 mr-4 px-4 mt-4">price: {price}</p>
      </figure>
      <div className="card-body flex flex-col items-center ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <button onClick={()=>handleCart(item)} className="text-red border-0 border-b-8 border-orange-400 bg-slate-100 rounded-lg mt-3 p-2 hover:bg-slate-300 hover:text-white">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
