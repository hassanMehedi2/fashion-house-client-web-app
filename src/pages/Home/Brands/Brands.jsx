import BrandCard from "./BrandCard";


const Brands = ({brands}) => {
    console.log(brands.length);
    return (
        <div className="">
            <h2 className="text-3xl text-center font-bold mt-14 mb-2 ">Popular Brands</h2>
            <p className="text-xl text-center mb-6">Explore more than thousand products</p>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-10  mx-5 lg:mx-28 ">
            {
                brands?.map(brand => 
                    <BrandCard  brand={brand}></BrandCard>
               )
            }
            </div>
        </div>
    );
};

export default Brands;