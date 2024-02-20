
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {const user = ("f"); 
    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addProduct'}>Add Product</NavLink></li>
        <li><NavLink to={'/about'}> My Cart</NavLink></li>
    </>

    const handleLogout = () => {
       
    }
    return (
        <div>
            <div className="navbar bg-base-100 h-28">
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <div className='flex flex-col'>
                                    <div className="w-10 rounded-full ">
                                        {
                                            user ? <img alt="" className='w-full object-fit rounded-full ' src={user.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                                : <img alt="" className='w-full object-fit rounded-full ' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                                        }
                                    </div>
                                    {
                                        user?.displayName ? <p className='text-sm lg:text-lg '>{user.displayName}</p> : <p className='text-sm lg:text-lg '>user</p>
                                    }
                                </div>
                            </li>
                            {navlinks}

                        </ul>
                    </div>


                    <a className="btn btn-ghost  font-bold text-3xl "><span className='font-bold text-4xl text-red-400'>Fashion</span> House</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='hidden lg:flex items-center gap-3 outlined outline-double pr-4 rounded-3xl '>
                    <div className='w-10 rounded-full'>
                        {
                            user?.photoURL ? <img className='object-cover rounded-full ' src={user.photoURL} alt="user" /> :
                            <img className='object-cover rounded-full ' src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'/> 
                        }
                    </div>
                    <div>
                        {
                            user?.displayName ? <p className='text-lg '>{user.displayName}</p> : <p className='text-lg '>user</p>
                        }
                    </div>
                    </div>

                 <div>
                       {user ? <NavLink onClick={handleLogout} className="btn btn-ghost rounded-lg ml-3">LogOut</NavLink>
                        : <NavLink to={'/login'} className="btn btn-ghost rounded-lg ml-3">Login</NavLink>
                    }
                 </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;