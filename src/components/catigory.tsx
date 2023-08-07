import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Catigaries = () => {
  return (
    <div className=''>
    <div className='mb-[100px]  mt-[100px]'>        
    <div className="text-center mb-20">
    {/* hadding */}
<h1 id='product' className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
Our Products
</h1>

<div className="flex mt-3 justify-center">
  <div className="w-16 h-1 rounded-full bg-orange-300 inline-flex" />
</div>

</div>
{/* Categories */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    {/* categories 1 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
<Link href={('/')}>
        <Image src={require('../../public/pic/img13.png')} alt='boys ' width={350} height={350}
        className='  rounded-xl duration-300  group-hover:scale-125'/>
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl
         font-extrabold tracking-tight   bg-black/60 text-center text-white w-full '>
            <h1 className='uppercase '>1kg  = Rs 3000</h1>

        </div>
        <div className='block lg:hidden absolute  bottom-12 scroll-m-20 text-4xl
         font-extrabold tracking-tight   bg-black/60 text-center text-white w-full '>
            <h1 className='uppercase '>1kg = Rs 3000</h1>

        </div>
        </Link>
    </div>
{/* cagegory2 */}

<div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
<Link href={('/')}>
        <Image src={require('../../public/pic/img6.png')} alt='boys ' width={350} height={350}
        className='rounded-xl duration-300  group-hover:scale-125'/>
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl
         font-extrabold tracking-tight   bg-black/60 text-center text-white w-full '>
            <h1 className='uppercase '>1kg  = Rs 1500</h1>

        </div>
        <div className='block lg:hidden absolute  bottom-12 scroll-m-20 text-4xl
         font-extrabold tracking-tight   bg-black/60 text-center text-white w-full '>
            <h1 className='uppercase '>1kg  = Rs 1500</h1>

        </div>

        </Link>
    </div>


    {/* category3 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
<Link href={('/')}>
        <Image src={require('../../public/pic/img5.png')} alt='boys ' width={350} height={550}
        className='rounded-xl duration-300  group-hover:scale-125'/>
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl
         font-extrabold tracking-tight   bg-black/60 text-center text-white w-full '>
            <h1 className='uppercase '>1kg = Rs 2000</h1>

        </div>
        <div className='block lg:hidden absolute  bottom-12 scroll-m-20 text-4xl
         font-extrabold tracking-tight   bg-black/60 text-center text-white w-full '>
            <h1 className='uppercase '>1kg  = Rs 2000</h1>

        </div>
        </Link>
    </div>
{/* shoes */}

<div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
<Link href={('/')}>
        <Image src={require('../../public/pic/img4.png')} alt='boys ' width={350} height={550}
        className='rounded-xl duration-300  group-hover:scale-125'/>
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl
         font-extrabold tracking-tight   bg-black/60 text-center text-white w-full '>
            <h1 className='uppercase '>1kg  = Rs 3000</h1>

        </div>
        <div className='block lg:hidden absolute  bottom-12 scroll-m-20 text-4xl
         font-extrabold tracking-tight   bg-black/60 text-center text-white w-full '>
            <h1 className='uppercase '>1kg  = Rs 3000</h1>

        </div>

        </Link>
    </div>

</div>

</div>
</div>
  )
}

export default Catigaries