import { useState } from "react";
import Swal from 'sweetalert2'
import Navbar from "../Shared/Nav/Navbar";


const AddProduct = () => {

    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [rating, setRating] = useState('');

    const handleBrandChange = e => {
        setBrand(e.target.value);
    }
    const handleTypeChange = e => {
        setType(e.target.value);
    }
    const handleRatingChange = e => {
        setRating(e.target.value);
    }


    const handleAdd = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = brand;
        const price = form.price.value;
        const productType = type;
        const description = form.description.value;
        const productRating = rating;
        const image1 = form.image1.value;
        const image2 = form.image2.value;
        const image3 = form.image3.value;

        const product = { name, brandName, price, productType, description, productRating, image1, image2, image3 };
        console.log(product);

        // send data to server to save into database 
        fetch(`https://fashion-house-server-web-app.vercel.app/addProduct`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Product Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div className="md:mx-10 ">
            <Navbar></Navbar>

            <div className="card shrink-0 w-full   bg-base-200  " >
                <form onSubmit={handleAdd} className="card-body">

                    <h2 className="text-center text-xl md:text-3xl font-semibold mt-5 mb-5">Add Product</h2>
                    <div className="flex gap-10">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Select Brand </span>
                            </label>
                            <select className="h-12 rounded-lg p-3" id="dropdown" value={brand} onChange={handleBrandChange}>
                                <option value="">Select...</option>
                                <option value="Chanel">Chanel</option>
                                <option value="Dior">Dior</option>
                                <option value="Gucci">Gucci</option>
                                <option value="Givenchy">Givenchy</option>
                                <option value="Versace">Versace</option>
                                <option value="Ck">Ck</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price $" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <select className="h-12 rounded-lg p-3" id="dropdown" value={type} onChange={handleTypeChange}>
                                <option value="">Select...</option>
                                <option value="Clothing">Clothing</option>
                                <option value="accessories">Accessories</option>
                                <option value="fragrance">Fragrances</option>
                                <option value="beauty">Beauty and Cosmetics</option>

                            </select>
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="description " className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <select className="h-12 rounded-lg p-3" id="dropdown" value={rating} onChange={handleRatingChange}>
                                <option value="">Select...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>

                    <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="form-control lg:w-1/3 ">
                            <label className="label">
                                <span className="label-text">Image 1</span>
                            </label>
                            <input type="text" name="image1" placeholder="image-1 " className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-1/3 ">
                            <label className="label">
                                <span className="label-text">Image 2</span>
                            </label>
                            <input type="text" name="image2" placeholder="image-2 " className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-1/3 ">
                            <label className="label">
                                <span className="label-text">Image 3</span>
                            </label>
                            <input type="text" name="image3" placeholder="image-3 " className="input input-bordered" required />
                        </div>
                    </div>
                    <input type="submit" value={'Add product'} className="btn w-ful font-medium text-base md:text-xl text-white bg-slate-500 mt-10 mb-14" />
                </form>
            </div>

            

        </div>
    );
};

export default AddProduct;