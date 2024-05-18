import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import PopularMenue from "../popularmenue/PopularMenue";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopularMenue></PopularMenue>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;