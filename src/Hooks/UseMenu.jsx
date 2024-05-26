import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UseAxiosPublic from "./UseAxiosPublic";

const UseMenu=()=>{
    const axiospublic=UseAxiosPublic()
    // const [data,setData]=useState([]);
    // const [loading,setLoading]=useState(true)
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/menu`)
    //     .then(res=>res.json())
    //     .then(a=>{
    //         // const filterData=a.filter(item=>item.category==='popular')
    //         setData(a)
    //         setLoading(false)
    //     });
    // },[])
    const {data:menu=[],isPending,refetch}=useQuery({
        queryKey:["menu"],
        queryFn:async ()=>{
         const res=await axiospublic.get('/menu');
         return res.data;
        }
    })


    return [menu,isPending,refetch]
}
export default UseMenu