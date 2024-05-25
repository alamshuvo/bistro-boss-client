import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";


const UseCart = () => {
    const axiosSecure=UseAxiosSecure();
    const {user}=UseAuth()
  const {data:carts,refetch}=useQuery({
    queryKey:["cart",user?.email],
    queryFn:async ()=>{
        const res=await axiosSecure.get(`/carts?email=${user.email}`);
        return res.data;
    }
  })
  return [carts,refetch]
};

export default UseCart;