import React from 'react'

const Project = () => {
 const  project = [
    {
        id:1,
        title:"Mobile version TD Africa",
        description:"Check out the project by clicking on the button",
        Access:"https://play.google.com/store/apps/details?id=com.app.super_app_customer&pcampaignid=web_share"

    },
    {
        id:2,
        title:"TD super store",
        description:"Check out the project by clicking on the button",
        Access:"https://blue-desert-0a2510703.5.azurestaticapps.net/"

    },
    {
        id:3,
        title:"TD CSP portal Africa",
        description:"Check out the project by clicking on the button",
        Access:"https://csp.tdafrica.com/"

    },
    {   id:4,
        title:"Verivault",
        description:"Check out the project by clicking on the button",
        Access:"https://verivault-admin.surge.sh/auth/login"

    },
    {
        id:5,
        title:"Just Own It",
        description:"Check out the project by clicking on the button",
        Access:"https://www.justownitapp.com/"

    }

 ]
  return (
    <div className='bg-white text-black py-20' Id='project'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Project</h2>
            </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {project.map(project=>(
                <div key={project.id} className='bg-white px-6 pb-6 rounded-lg' id="box">
                 <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                                 from-green-400 to-blue-500'>
                                    {project.id}
                  </div>
                   <h2 className='bg-gradient-to-r
         from-yellow-800 to-yellow-500 text-black font-bold mb-5 mr-5'>{project.title}</h2>
                    <p className=' text-black mb-5 mr-5 '>{project.description}</p>
                    <a href={project.Access} className='bg-gradient-to-r mx-5 my-5 from-yellow-200 
                    to-yellow-500 text-black hidden md:inline transform px-4 py-2 rounded-full'>
                    Access
                    </a>
                 </div>      
            ))}
         </div>   
   </div>
  )
}

export default Project