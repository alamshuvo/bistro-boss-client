import Helmeta from "../../components/Hemlmet/Helmet";
import Cover from "../Shared/Cover/Cover";
import imga from '../../../public/assets/menu/banner3.jpg'
import desserta from '../../../public/assets/menu/dessert-bg.jpeg'
import pizzza from '../../../public/assets/menu/pizza-bg.jpg'
import saladimg from '../../../public/assets/menu/salad-bg.jpg'
import soupimg from '../../../public/assets/menu/soup-bg.jpg'
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategories from "./Menucategory/MenuCategories";

const Menu = () => {
 const [data]=UseMenu();
 const dessert=data.filter(item=>item.category==="dessert")
 const soup=data.filter(item=>item.category==="soup")
 const salad=data.filter(item=>item.category==="salad")
 const Pizza=data.filter(item=>item.category==="Pizza")
 const offered=data.filter(item=>item.category==="offered")
 
    return (
        <div>
            <Helmeta title={"Menue"}></Helmeta>
            <Cover img={imga} title={"Our Menue"} subtitle={"This is our menu item"}></Cover>
            {/* main cover */}
            <SectionTitle subHeading={"Dont Miss"} heading={"Todays offer"}> </SectionTitle>
            {/* offered menue items */}
            <MenuCategories items={offered}></MenuCategories>
            {/* desert menu items */}
            <MenuCategories items={dessert} imga={desserta} title={"dessert"}></MenuCategories>
            {/* fizza */}
            <MenuCategories items={Pizza} imga={pizzza} title={"pizza"}></MenuCategories>
            {/* salad */}
            <MenuCategories items={salad} imga={saladimg} title={"salad"}></MenuCategories>
            {/* soup*/}
            <MenuCategories items={soup} imga={soupimg} title={"soup"}></MenuCategories>
           

           
            
        </div>
    );
};

export default Menu;