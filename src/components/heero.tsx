import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';

const Hero=()=>{
return(
    
    <div><div className="hero mx-auto min-h-[80vh] bg-fixed bg-center bg-no-repeat custom-img mb-[100px]">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-6xl font-bold"> <span className='text-8xl text-lime-400/90' >  الشفاء </span>    <span className=' text-orange-100'>    خالص شہد </span></h1>
        <p className="mb-5 text-lg text-amber-100 font-bold">ہمارے ہاؤس ہر قسم کے ورائٹی کا خالص شہد مناسب قیمت میں دستیاب ہے۔ </p>
        <Button className='outline  outline-offset-2 outline-1 hover:rounded-3xl duration-700 group hover: hover:outline-orange-400 text-white text-xl font-bold'>
          <Image alt='berger' src={require('../../public/pic/logo3.png')} className="mr-3 h-6 w-6  group-hover:animate-bounce " />
       shop now
      
    </Button>

<div className='flex justify-center mt-20 gap-10 mb-5  font-bold'>


  
  <h1 className="text-3xl  title-font  font-bold text-lime-50 mb-4">
  سخی مخمد  اینڈ  ذاکر اللہ    
</h1>
<h1 className="text-3xl  font-bold title-font text-green-200 mb-4"  >   : پروپرائٹر     
</h1>
</div>
    
      </div>
      
    </div>


    
  </div></div>
)
}
export default Hero;