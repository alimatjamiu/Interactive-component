import Image from "next/image";
import ThankYou from "../../public/images/illustration-thank-you.svg";
export default function Thanks({ rating}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className='bg-[#252d37] text-white flex flex-col items-center justify-center py-8 rounded-2xl mx-auto'>
        <div className='flex flex-col px-6 items-center gap-4 justify-center w-full sm:max-w-[12rem] max-w-[20rem] md:max-w-[26rem] lg:max-w-[24rem]'>
            <div className=' flex items-center justify-center w-[40%]'>
                <Image src={ThankYou} alt='thank you' width={400} height={400} /></div>
                <p className="bg-gray-700 text-[#fb7413] rounded-full text-sm px-4 p-1">you selected {rating} out of 5</p>
          <h1 className="font-400 text-xl">Thank you!</h1>
          <p className='text-[#959eac] text-center'>We appreciate your taking the time to give a rating. if you ever need more support, dont hesitate to get in touch!</p>
         
        </div>
      </div>
    </div>
  );
}
