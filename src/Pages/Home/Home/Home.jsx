import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import PopularMenue from "../popularmenue/PopularMenue";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopularMenue></PopularMenue>
            <Featured></Featured>
        </div>
    );
};

export default Home;