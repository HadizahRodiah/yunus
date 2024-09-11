import React from 'react'
import Ahmad from '../assets/Ahmad.jpg'
const Royy=()=>{
    return(
        <div className='text-white text-center py-16' id="royy">
            <img src={Ahmad} alt=""  className='mx-auto mb-50 w-48 h-50 rounded-full object-cover transform-transition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>I'm{" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700'>Yunus Hamod Gbolahan</span>
                ,Backend-end Developer
            </h1>
            <p className='mt-4 mb-5 text-lg text-black-500 px-4'>
            Bachelor of Engineering in Systems Engineering,University of Lagos Akoka.
            </p>
            <div>
                <a href="https://drive.google.com/file/d/1ghPS1qfeJHPQGzBHa01Fo1EFr-_aJdvu/view?usp=drive_link" className=' font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' download>Resume</a>
                <a href='#contact' className='font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact me</a>
            </div>
        </div>
    )
}
export default Royy