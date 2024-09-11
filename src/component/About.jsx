import React from 'react'
import Ahmad from '../assets/Ahmad.jpg'


const About = () => {
  return (
    <div className='bg-white text-black py-20' Id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About me</h2>
            </div>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={Ahmad} className='w-74 h-80 p-5 rounded object-cover mb-8 md:mb-0'></img>
           <div className='flex-1'>
           <p className='text-lg mb-8'>
           Experienced backend developer specializing in the dotnet Stack (ASP.NET Core, Entity Framework Core)and Azure DevOps. Proficient in C# with a strongfoundation in relational databases. Dedicated todelivering high-quality software solutions using .NETtechnologies. Seeking opportunities to leverage my.NET skills and 
           contribute to innovative projects in a collaborative team setting.
            </p>
            <div id="skills" className='font-bold'>
            <fieldset>
                <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-800' >
                Primary Skill</h2>
                <p>C#</p>
                <p>Asp.Net Core</p>
                <p>Entity Framework Core</p>
                <p>Azure DevOPs</p>
                <p>SQL</p>
           </fieldset>
            <fieldset>
               <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-yellow-400'>
                Additional Skill</h2>
               <p> Java</p>
               <p>Spring Framework</p>
               <p>Javascript</p>
               <p>python</p>
            </fieldset>
            <fieldset>
               <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-800'>
                Languages</h2>
               <p>English</p>
               <p>Yoruba(native)</p>
            </fieldset>
            </div>
           </div>
        </div>

    </div>
  )
}

export default About
