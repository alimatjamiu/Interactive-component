"use client";
import Image from 'next/image';
import Star from "../../public/images/icon-star.svg";
import { useState } from 'react';
import Thanks from '../component/thanks';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating !== null) {
      setSubmitted(true);
    } else {
      alert("Please select a rating");
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center h-screen font-[var(--font-geist-sans)] ">
  {!submitted && (
     <div className=' bg-[#252d37]  text-white flex flex-col items-center justify-center   py-8 rounded-2xl mx-auto'>
     <div className='flex flex-col px-6 gap-4 w-full sm:max-w-[12rem] max-w-[20rem] md:max-w-[24rem] lg:max-w-[24rem]'>
     <span className='bg-gray-700 rounded-full p-2 w-10 h-10 flex items-center justify-center'><Image src={Star} alt='star'/></span>
     <h1 className='text-2xl font-semibold'>How did we do?</h1>
     <p className='text-[#959eac] text-sm'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offfering!</p>
     
    <form
    onSubmit={handleSubmit}
     className='w-[90%] flex flex-col gap-6'>
    <div className='flex items-center gap-6 lg:gap-6'>
         <button
         type='button'
          onClick={() => setRating(1)}
          className={`bg-gray-700 focus:bg-[#fff] ${rating === 1 ? ' text-gray-700 scale-110 ring-2 ring-white shadow-lg' : ''} ease transition-all-duration-300 hover:scale-110
           text-[#959eac] rounded-full w-12 h-8 md:w-14 md:h-10 lg:w-10 lg:h-10 hover:bg-[#fb7413] focus:outline-none`}>1</button>
         <button
         type='button'
          onClick={() => setRating(2)}
          className={`bg-gray-700 focus:bg-[#fff] ${rating === 2 ? ' text-gray-700 scale-110 ring-2 ring-white shadow-lg' : ''} ease transition-all-duration-300 hover:scale-110 text-[#959eac] rounded-full w-12 h-8 md:w-14 md:h-10 lg:w-10 lg:h-10 hover:bg-[#fb7413] focus:outline-none`}>2</button>

         <button
         type='button'
          onClick={() => setRating(3)}
          className={`bg-gray-700 focus:bg-[#fff] ${rating === 3 ? ' text-gray-700 scale-110 ring-2 ring-white shadow-lg' : ''} ease transition-all-duration-300 hover:scale-110 text-[#959eac] rounded-full w-12 h-8 md:w-14 md:h-10 lg:w-10 lg:h-10 hover:bg-[#fb7413] focus:outline-none`}>3</button>
         <button
         type='button'
          onClick={() => setRating(4)}
          className={`bg-gray-700 focus:bg-[#fff] ${rating === 4 ? ' text-gray-700 scale-110 ring-2 ring-white shadow-lg' : ''} ease transition-all-duration-300 hover:scale-110 text-[#959eac] rounded-full w-12 h-8 md:w-14 md:h-10 lg:w-10 lg:h-10 hover:bg-[#fb7413] focus:outline-none`}>4</button>
         <button
         type='button'
          onClick={() => setRating(5)}
          className={`bg-gray-700 focus:bg-[#fff] ${rating === 5 ? ' text-gray-700  scale-110 ring-2 ring-white shadow-lg' : ''} ease transition-all-duration-300 hover:scale-110   text-[#959eac] rounded-full w-12 h-8 md:w-14 md:h-10 lg:w-10 lg:h-10 hover:bg-[#fb7413]`}>5</button>
       </div>
       <div className=' '>
         <button 
          
         type='submit'
         className='bg-[#fb7413]  rounded-full text-black w-full   py-2 hover:bg-[#fff]'>Submit</button>
       </div>
     </form>
    </div>
     
    </div>
  )}
    {submitted && <Thanks rating={rating} setSubmitted={setSubmitted} />}
    </div>
  );
}
