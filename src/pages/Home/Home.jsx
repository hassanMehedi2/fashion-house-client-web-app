import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Nav/Navbar";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import Footer from "../Shared/Footer/Footer";
import Trending from "./Trending/Trending";
import Offers from "./Offers/Offers";


const Home = () => {
    const brands = useLoaderData(null);
    console.log(brands.length);
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Brands  brands={brands}></Brands>
           <Trending></Trending>
           <Offers></Offers>
        </div>
    );
};

export default Home;