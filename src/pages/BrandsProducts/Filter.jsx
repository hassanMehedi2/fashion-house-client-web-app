
const Filter = () => {
    return (
        <div className="hidden lg:flex flex-col">
                        <div>
                            <h3 className="text-xl font-bold">Shop</h3>
                            <ul className="px-3">
                                <li className="text-base text-gray-600 mt-3">Clothing</li>
                                <li className="text-base text-gray-600 mt-3">Accessories</li>
                                <li className="text-base text-gray-600 mt-3">Fragrance</li>
                                <li className="text-base text-gray-600 mt-3">Beauty and Cosmetics</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl mt-5 font-bold">Categories</h3>
                            <ul className="px-3">
                                <li className="text-base text-gray-800 mt-3">Clothing</li>
                                <li className="text-base text-gray-800 mt-3">Accessories</li>
                                <li className="text-base text-gray-800 mt-3">Fragrance</li>
                                <li className="text-base text-gray-800 mt-3">Beauty and Cosmetics</li>
                            </ul>
                        </div>

                        <div className=" mt-5"> 
                            <h3 className="text-xl font-bold">Size</h3>
                            <div className="flex gap-3 mt-3">
                                <button className="rounded-full bg-slate-200  flex items-center justify-center font-medium  w-11 h-11 text-base">s</button>
                                <button className="rounded-full bg-slate-200  flex items-center justify-center font-medium  w-11 h-11 text-base">m</button>
                                <button className="rounded-full bg-slate-200  flex items-center justify-center font-medium  w-11 h-11 text-base">l</button>
                                <button className="rounded-full bg-slate-200  flex items-center justify-center font-medium  w-11 h-11 text-base">xl</button>
                                
                            </div>
                        </div>
                    </div>
    );
};

export default Filter;