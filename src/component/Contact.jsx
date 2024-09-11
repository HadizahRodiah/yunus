import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_38znrfu', 'template_4rvqe0t', form.current, {
          publicKey: 'P_2P6AfRqaD22IOwt',
        })
        .then(
          () => {
            window.alert('SUCCESS! message sent');
          },
          (error) => {
           window.alert('FAILED...', error.text);
          },
        );
    };
  
  return (
    <div className='text-white text-center py-16' id="contact">
<h2 className='text-4xl font-bold text-center mb-12'>Contact</h2>
    <div className='flex flex-col md:flex-row item
    s-center md:space-x-12 p-10' >
      <div className='flex-1'>
        <h2 className='text-4xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-yellow-400 to-yellow-800 mb-4'> Let's Connect</h2>
        <p>I am in for discussing Web development projects and partnership </p>
        <div className='mb-4 mt-8 font-bold'>
        <a href="yunushamod@gmail.com" className='inline-block text-yellow-300 mr-2 hover:underline font-bold'>EMAIL</a>
        </div>
        <div className='mb-4 mt-8 font-bold'>
        <span className='inline-block text-yellow-400 mr-2 hover:font-bold'>PHONE:+2349098398073</span>
        </div>
        <div className='mb-4 mt-8 font-bold'>
        <a href="https://wa.me/qr/RGUVY4BUOVJXO1" className='inline-block text-yellow-600 mr-2 hover:underline hover:underline font-bold'>WhatsAPP</a>
        </div>
        <div className='mb-4 mt-8 font-bold hover:text-black'>
        <a href="https://www.linkedin.com/in/yunus-hamod" className='inline-block text-yellow-900 mr-2 hover:underline hover:underline tex-black font-bold'>Linkedin</a>
        </div>
      </div>

      <div className=' flex-1 font-bold p-10'>
        <form ref={form} onSubmit={sendEmail}>
      <label htmlFor='Name' className='block mb-2'>Name</label>
      <input type='text' placeholder='Enter your name' name='from_name' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'></input>  
      <label htmlFor='Email' className='block mb-2'>Email</label>
      <input type='text' placeholder='Enter your Email' name='from_email' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'></input>  
      <label htmlFor='Text' className='block mb-2'name='message'>Message</label>
      <textarea type='text' rows='5' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your message'></textarea>
      <button type='submit' value='Send'className='font-bold bg-gradient-to-r from-yellow-500 to-yellow-50 text-black hidden
       md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
          </form>  
      </div>
      </div>
    </div>
  )
}

export default Contact