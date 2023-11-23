import React from 'react'
import im1 from "../assets/im1.jpg";

function Headline() {
  return (
    <div className='flex h-screen '>
        <div className='bg-slate-500 w-1/2'>
        <img src={im1} alt='' className='h-screen w-full'/>
        </div>

        <div className='bg-slate-100 w-1/2'>
          <div className='bg-white w-[340px] h-80 ml-40 mt-40 rounded'>
            <h1 className='text-2xl font-bold text-center pt-4'>PERA SPORT</h1>
            <ul className='pt-3'>
                <li className='text-xl pl-3 font-semibold '>
                    Name
                </li>
                <li className='text-xl pl-3'>
                    <input className='w-[320px] border'></input>
                </li>

                <li className='text-xl pl-3 pt-3 font-semibold'>
                    Password
                </li>
                <li className='text-xl pl-3'>
                    <input className='w-[320px] border'></input>
                </li>

                <li className='mt-4 text-center text-xl text-white bg-cyan-600 h-8 ml-3 mr-2 font-semibold'>
                   <button>Login</button>
                </li>
                <div className='flex justify-between pt-6'>
                    <p className='pl-2 font-semibold'><input type='checkbox'></input> Remember me</p>
                    <p className='pr-2 font-semibold'>Create an Account</p>
                </div>

            </ul>
          </div>
        </div>
    </div>
  )
}

export default Headline