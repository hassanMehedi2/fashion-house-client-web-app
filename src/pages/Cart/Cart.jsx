import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Nav/Navbar";
import SingleCart from "./SingleCart";
import { useEffect, useState } from "react";

const Cart = () => {
    const cartItems = useLoaderData();
    const [currentItems, setCurrentItems] = useState(cartItems);
    const [subtotal, setSubtotal] = useState(0);



    useEffect(() => {
        if (currentItems) {
            // Calculate subtotal using map
            const total = currentItems.map(item => parseFloat(item.price)).reduce((acc, val) => acc + val, 0);
            setSubtotal(total);
        }
    }, [currentItems]); // Run the effect whenever cartItems change


    return (
        <div className="bg-slate-100">
            <Navbar ></Navbar>
            <h2 className="my-10 text-center text-xl md:text-2xl lg:text-3xl font-bold">Cart List</h2>
            <div className="mx-5 lg:mx-40 flex flex-col md:grid md:grid-cols-5 gap-5 lg:gap-16">

                <div className="col-span-3 ">
                    {
                        (currentItems.length == 0) && <h2 className="flex justify-center items-center h-1/2">Cart is Empty</h2>
                    }
                    {
                        currentItems && currentItems?.map(item => <SingleCart
                            key={item._id}
                            item={item}
                            currentItems={currentItems}
                            setCurrentItems={setCurrentItems}
                        ></SingleCart>)
                    }
                </div>
                <div className="col-span-2 rounded-xl px-10 py-8 bg-white h-[60vh]">
                    <div className="bg-slate-100 rounded-lg w-1/2 p-4 text-center"><span className="font-semibold ">Home Delivery</span></div>


                    <div className="flex justify-between mt-10">

                        <p>Subtotal : </p>
                        <p>{subtotal}</p>
                    </div>
                    <div className="flex justify-between mt-3">

                        <p>Delivery charge : </p>
                        <p>00</p>
                    </div>
                    <div className="flex justify-between mt-5">

                        <p className="font-semibold text-xl">Total : </p>
                        <p className="font-semibold text-xl">{subtotal}</p>
                    </div>

                    <button className="btn mt-5 bg-green-400 text-white w-full">Checkout</button>
                    <p className="md:hidden lg:flex mt-3 text-sm" >This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;