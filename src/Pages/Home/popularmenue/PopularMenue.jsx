import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenueItem from "../../Shared/MenuItem/MenueItem";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenue = () => {
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(a=>{
    //         const filterData=a.filter(item=>item.category==='popular')
    //         setData(filterData)
    //     });
    // },[])
    const [data]=UseMenu()
    const filterData=data.filter(item=>item.category==='popular')

  return (
    <div className="mb-12">
      <SectionTitle
        heading={"From Our Menue"}
        subHeading={"Popular items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {
            filterData.map(item=><MenueItem key={item._id} item={item}>

            </MenueItem>)
        }
      </div>

    </div>
  );
};

export default PopularMenue;
