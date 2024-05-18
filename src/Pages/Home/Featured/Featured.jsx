import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import featuredImg from "../../../../public/assets/home/featured.jpg"
import { Button } from "@nextui-org/react";
import './style.css'
const Featured = () => {
    return (
        <div className="pt-10 my-20">
            <SectionTitle
            subHeading={"Check it Out"}
            heading={"Featured item"}>

            </SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16 md:gap-8 gap-4 featured-item bg-fixed text-white pb-20 pt-12 md:px-36 ">
                <div >
                    <img src={featuredImg} alt="" />
                </div>
                <div className="bg-slate-500 bg-opacity-35">
                    <p>Aug 20 ,2029</p>
                    <p className="uppercase">Where can i get it some</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis neque illum ad dolor perspiciatis nihil natus alias voluptate autem. Rerum inventore enim non dolores debitis blanditiis reiciendis! Quo natus ut sed aspernatur laborum id inventore vel blanditiis quam doloremque possimus quos obcaecati dignissimos reprehenderit ea corrupti amet, incidunt sequi!</p>
                    <Button variant="bordered" className="text-white border-0 border-b-4 mt-3 hover:bg-black hover:text-white" >Order Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Featured;