import React from 'react'

const Service = () => {
    const service=[
        {
            
            id:1,
            title:"Software Engineer - Clane",
            description:" Revamped the backend system of the admin back office.Collaborated on rewriting the backend of a POSsystem that have gone on to do tens of thousands of transactions.",
            Technology: "Java, Spring Boot, Spring Data,Spring Security, AWS, Postgres"

        },
        {
            id:2,
            title:"Lead Software Engineer - StaffNavigatorNigeria Limited",
            description:"Managed Azure DevOps for the company,overseeing the deployment and management of software applications.Revamped a Xamarin.Forms application to meet new business needs.integrated external payment gateways for payment processing.Developed Web APIs for two e-commerce platforms (TD Super App for B2B and Just Own It for B2C) and two payment gateways.Built Web APIs for a Microsoft CSP platform.",
            Technology:" ASP.Net Core, Entity FrameworkCore, ASP.Net Core Identity, Azure Web Apps,Postgres (Azure Database for Postgres), SQLServer, Microsoft CSP SDK (C#)"
           
        },


        {
            id:3,
            title:"Software Engineer - Crendly",
            description:"Built the central service (microservice) that manages all the loan requests and portfolios created on the platform.Built a loan repayment service (microservice) that manages and keeps track of due repayments and does auto-debit",
            Technology: "Asp.Net Core, Entity FrameworkCore, Azure Service Bus, Postgres",
        },
        {
            id:4,
            title:"Software Engineer - IconFlux Limited",
            description:"Managed Azure DevOps for the company,overseeing the deployment and management of software applications.Collaborated on building a ride-sharing application, including frontend (mobile withXamarin.Forms) and backend development.",
            Technology:"Asp.Net Core, Entity FrameworkCore, Xamarin Forms, Postgres"
        },
        {
            id:5,
            title:"Microsoft CSP Portal (StaffNavigatorNigeria Limited)",
            description:"Built the Web API for a Microsoft CSP platform,facilitating management and provisioning of cloud services.",
            Technology: "ASP.Net Core, EntityFramework Core, Azure Web Apps, SQL Server"
        },
        {
            id:6,
            title:"Xamarin.Forms Application Revamp(StaffNavigator Nigeria Limited)",
            description:"Revamped a Xamarin.Forms application to meet new business needs at Staff Navigator NigeriaLimited.",
            Technology: "Xamarin.Forms"
        }
    ]
  return (
    <div className='text-white py-20' Id='service'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Experience</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {service.map(service=>
        <div key={service.id} className='px-6 pb-6 rounded-lg' id='box2'>
        <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
         from-green-400 to-blue-500'>{service.id}
        </div>
     <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
        {service.title}
     </h3>
     <p>
        {service.description}
     </p>
     <p className='font-bold'>
      <h3 className='bg-gradient-to-r
         from-yellow-800 to-yellow-500'>Technology</h3> {service.Technology}
     </p>
       </div> )}
        </div>

    </div>
  )
}

export default Service