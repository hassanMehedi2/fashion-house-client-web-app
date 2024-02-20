import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Nav/Navbar";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";


const Home = () => {
    const brands = useLoaderData(null);
    console.log(brands.length);
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Brands  brands={brands}></Brands>
        </div>
    );
};

export default Home;