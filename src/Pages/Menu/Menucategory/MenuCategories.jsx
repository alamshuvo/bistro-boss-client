import { Link } from "react-router-dom";
import UseMenu from "../../../Hooks/UseMenu";
import Cover from "../../Shared/Cover/Cover";
import MenueItem from "../../Shared/MenuItem/MenueItem";
import { Button } from "@nextui-org/react";

const MenuCategories = ({ items, title, imga }) => {
  // const [data]=UseMenu()

  return (
    <div>
      {title && (
        <Cover
          img={imga}
          title={title}
          subtitle={"This is our menu item"}
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 my-16 pt-8 ">
        {items.map((item) => (
          <MenueItem key={item._id} item={item}></MenueItem>
        ))}
        
      </div>
      <Link to={`/order/${title}`}>
        {" "}
        <button className="text-red border-0 border-b-4 mt-3 hover:bg-black hover:text-white">
          Order Now
        </button>
      </Link>
     
      
    </div>
  );
};

export default MenuCategories;
