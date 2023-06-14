import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <div className=' h-[100vh] w-full bg-gray-50'>
      <div className='bg-gray-200 px-6 py-2'>
        <h1 className=' font-bold text-2xl text-blue-600'>Create Survey</h1>
        <div className='flex items-center gap-1 text-[12px]'>
          <p>Home/My Surveys/ </p>
          <p className='text-blue-600'>Create Survey</p>
        </div>
      </div>
      <div className='flex flex-col px-6 py-4 '>
        <h1 className='my-6 font-bold text-2xl'>
          Survey Subject & Description
        </h1>
        <input
          placeholder='Survey Name'
          type='text'
          className='border my-4 w-[200px] p-2 bg-inherit border-yellow-400'
        />
        <input
          placeholder='Describe your survey'
          className='border w-[500px] h-[150px] p-2  bg-inherit border-yellow-400 mt-8 '
        />
      </div>
      <div className='px-6'>
        <hr className='mt-[200px]' />
        <Link to='/next1'>
          <button className='flex items-center gap-x-8 mt-4 bg-slate-500 p-2'>
            Next <AiOutlineArrowRight />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default First
