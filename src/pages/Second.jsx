import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import girl from '../Asset/girl_clock@3x.png'

const Second = () => {
  return (
    <div className=' h-[100vh] w-full bg-gray-50 '>
      <div className='bg-gray-200 px-6 py-2'>
        <div className='flex items-center gap-x-1'>
          <h1 className=' font-bold text-xl text-blue-600'>Create Survey -</h1>
          <h1 className=' font-bold text-xl '>Career skill feedback</h1>
        </div>

        <div className='flex items-center gap-1 text-[12px]'>
          <p>Home / My Surveys / </p>
          <p className='text-blue-600'>Create Survey</p>
        </div>
      </div>
      <div className='flex '>
        <div className='flex flex-col px-6 py-4 w-[75%] '>
          <div className='flex items-center justify-between mt-10'>
            <h1 className=''>QUESTION 1 </h1>
            <div className='flex items-center gap-1'>
              <p>Required</p>
              <label class='switch'>
                <input type='checkbox' />
                <span class='slider round'></span>
              </label>
            </div>
            <div class='custom-select w-[200px]'>
              <select class='border-0 cursor-pointer p-2  bg-sky-200 w-[150px] duration-300 hover:bg-sky-400 border-yellow-400 '>
                <option value='0'>Single Choice</option>
                <option value='1'>Multiple Choice</option>
                <option value='2'>Short Answer</option>
                <option value='3'>Long Answer</option>
                <option value='4'>Star Rating</option>
                <option value='5'>Yes/No</option>
                <option value='6'>Number Rating</option>
              </select>
            </div>
          </div>

          <div className='flex flex-col mt-6'>
            <input
              placeholder='Type your Question here'
              type='text'
              className=' my-4 w-full p-2 bg-inherit border-yellow-400  border-b-2 placeholder:text-slate-400 placeholder:font-bold placeholder:text-2xl
              focus:outline-none text-2xl font-bold'
            />

            <div className='flex items-center gap-10 '>
              <input
                placeholder='Option 1'
                type='text'
                className='border my-4 w-[200px] p-2 bg-inherit border-yellow-400 focus:outline-none'
              />
              <input
                placeholder='Option 2'
                className='border w-[200px]  p-2  bg-inherit border-yellow-400 focus:outline-none '
              />
            </div>

            <button className='bg-inherit text-blue-600 w-[200px] border-blue-600 border-2 p-2 mt-10'>
              + ADD MORE OPTIONS
            </button>
          </div>
        </div>

        <div className='w-[20%]  mt-10 shadow-md bg-white p-4 mr-6 flex  flex-col '>
          <h1 className='font-bold text-xs'>QUESTIONS LIST</h1>
          <hr className='mt-2' />
          <div className='flex flex-col items-center'>
            <p className=' my-14 text-center w-[150px] text-xs text-gray-600 '>
              Questions asked will be visible here
            </p>
            <img src={girl} alt='' className='w-[100px] mb-[200px]' />
          </div>
        </div>
      </div>
      <div className='px-6'>
        <hr className='mt-[100px]' />
        <div className='flex items-center justify-between'>
          <Link to='/next2'>
            <button className='bg-blue-600 w-[200px] text-white p-2 mt-4'>
              + ADD NEW QUESTIONS
            </button>
          </Link>
          <Link to=''>
            <button className='bg-blue-600 text-white  p-2 mt-4 '>
              SHARE SURVEY
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Second
