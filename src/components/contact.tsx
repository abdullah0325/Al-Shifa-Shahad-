import react from 'react'
const Contact = ()=>  {
    return(
        <div  className=''>
          <div className="flex flex-col text-center w-full py-2 ">
          <div className="text-center ">
        <h1 id='contact' className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
        Contact Us
        </h1>
       
        <div className="flex mt-3 justify-center">
          <div className="w-16 h-1 rounded-full bg-orange-300 inline-flex" />
        </div>
      </div>
       
      </div>
            <section className="text-gray-600 body-font relative">
  <div className=" container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2  rounded-2xl overflow-hidden
     sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="90%"
        height="90%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3296.7195098327716!2d71.7864629!3d34.2812041!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1691347728957!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) opacity(1)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Amir Abad Pull Irat kally
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">shakirullahcs1@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">03009010802</p>
        </div>
      </div>
    </div>
   
    <div  className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        feel free to contact
      </p>
       <form action="https://formspree.io/f/mleygqpn"
  method="POST" >
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
          focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 
          transition-colors duration-200 ease-in-out"
         required
         />
      </div>
      <div className="relative mb-4 ">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
           focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
           duration-200 ease-in-out"
        required/>
      </div>
      <div className="relative mb-4 ">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
           focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
           duration-200 ease-in-out"
        required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 
          focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 
          transition-colors duration-200 ease-in-out"
          defaultValue={""}
        required/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600
       rounded text-lg">
        Send massege
      </button>
      </form>
     
    </div>
  </div>
</section>

        </div>
    )}
    export default Contact;



    