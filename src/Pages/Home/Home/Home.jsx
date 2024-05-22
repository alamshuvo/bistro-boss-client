import Helmeta from "../../../components/Hemlmet/Helmet";
// import CommeingSoon from "../../../components/commeingSoon/CommeingSoon";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import PopularMenue from "../popularmenue/PopularMenue";


const Home = () => {
    return (
        <div>
            <Helmeta title={"Home"}></Helmeta>
            <Banner></Banner>
            {/* <CommeingSoon></CommeingSoon> */}
            <Categories></Categories>
            <PopularMenue></PopularMenue>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;