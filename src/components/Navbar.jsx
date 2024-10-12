import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-7 px-10 bg-emerald-500 text-white flex items-center justify-between'>
            <h2 className='text-2xl'>iFaiyan</h2>
            <input className='text-black' type="text" placeholder='Type Something' />
            <div className='flex gap-10'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Products</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;
