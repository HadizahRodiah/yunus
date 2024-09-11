import React from 'react'

const Navbar=()=>{
    return(
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
            <div className='container py-2 flex justify-center md:justify-between item-center'>
                <div className='text-2xl font-bolder hidden md:inline'>
                 Yunus
                </div>
                <div className='space-x-6 font-bold'>
                <a href="#royy" className='hover:text-yellow-700'>Home</a>
                <a href="#about" className='hover:text-yellow-700'>About</a>
                <a href="#service" className='hover:text-yellow-700'>Experience</a>
                <a href="#project" className='hover:text-yellow-700'>Project</a>
                <a href="#contact" className='hover:text-yellow-700'>Contact</a>
                </div>
                <a href='#contact'className='font-bold bg-gradient-to-r from-yellow-500 to-yellow-50 text-black hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>connect me</a>
            </div>
        </nav>
    )
}
export default Navbar