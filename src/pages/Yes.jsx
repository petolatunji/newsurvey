import React from 'react'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import close from '../Asset/close@2x.png'

const Yes = () => {
  return (
    <div className=' h-[100vh] w-full bg-gray-50 '>
      <div className='bg-gray-200 px-6 py-2'>
        <div className='flex items-center gap-x-1'>
          <h1 className=' font-bold text-xl text-blue-600'>Create Survey -</h1>
          <h1 className=' font-bold text-xl '>Career skill Feedback</h1>
        </div>

        <div className='flex items-center gap-1 text-[12px]'>
          <p>Home / My Surveys / Create Survey / </p>
          <p className='text-blue-600'>Career-Skill Feedback</p>
        </div>
      </div>
      <div className='flex '>
        <div className='flex flex-col px-6 py-4 w-[75%] '>
          <div className='flex items-center justify-between mt-10'>
            <h1 className=''>QUESTION 7 </h1>
            <div className='flex items-center gap-1'>
              <p>Required</p>
              <label class='switch'>
                <input type='checkbox' />
                <span class='slider round'></span>
              </label>
            </div>
            <div class='custom-select w-[200px]'>
              <select class='border-0 cursor-pointer p-2  bg-sky-200 w-[150px] duration-300 hover:bg-sky-400 border-yellow-400 '>
                <option value='0'>Yes/No</option>
                <option value='1'>Short Answer</option>
                <option value='2'>Single Choice</option>
                <option value='3'>Multiple Choice</option>
                <option value='4'>Long Answer</option>
                <option value='5'>Emoji Rating</option>
                <option value='6'>Star Rating</option>
                <option value='7'>Number Rating</option>
              </select>
            </div>
          </div>

          <div className='flex flex-col mt-6'>
            <input
              placeholder='Should I start with UI development'
              type='text'
              className=' my-4 w-full p-2 bg-inherit border-yellow-400  border-b-2 placeholder:text-black placeholder:font-bold placeholder:text-2xl
              focus:outline-none text-2xl font-bold'
            />
            <div className='flex flex-wrap gap-4 mt-4'>
              <div className='flex flex-col items-center border border-yellow-400 p-4 rounded-md'>
                <FaThumbsUp className='text-4xl text-yellow-400' />
                <p className='mt-2'>Yes</p>
              </div>
              <div className='flex flex-col items-center border border-yellow-400 p-4 rounded-md'>
                <FaThumbsDown className='text-4xl text-yellow-400' />
                <p className='mt-2'>No</p>
              </div>
            </div>
          </div>
        </div>

        <div className='h-[550px]  mt-10 shadow-md bg-white p-4 mr-6 flex  flex-col '>
          <h1 className='font-bold text-xs'>QUESTIONS LIST</h1>
          <hr className='mt-2' />
          <div className='flex flex-col gap-y-4'>
            <p className=' mt-4 font-bold px-4 py-1  text-[10px] text-gray-600 rounded-full border flex items-center gap-x-2 border-yellow-300 bg-yellow-50 '>
              What is my biggest strenght
              <img src={close} alt='' className='w-[15px] h-[15px]' />
            </p>
            <p className='  font-bold px-4 py-1  text-[10px] text-gray-600 rounded-full border flex items-center gap-x-2 border-yellow-300 bg-yellow-50 w-[200px] '>
              Which softwares are good to get started with basic UI design
              <img src={close} alt='' className='w-[15px] h-[15px]' />
            </p>
            <p className='  font-bold px-4 py-1  text-[10px] text-gray-600 rounded-full border flex items-center gap-x-2 border-yellow-300 bg-yellow-50 w-[200px] '>
              How will you define Design?
              <img src={close} alt='' className='w-[15px] h-[15px]' />
            </p>
            <p className='  font-bold px-4 py-1  text-[10px] text-gray-600 rounded-full border flex items-center gap-x-2 border-yellow-300 bg-yellow-50 w-[200px] '>
              Explain why sketch is better than Adobe XD. Also is there any
              replacement?
              <img src={close} alt='' className='w-[15px] h-[15px]' />
            </p>
            <p className='  font-bold px-4 py-1  text-[10px] text-gray-600 rounded-full border flex items-center gap-x-2 border-yellow-300 bg-yellow-50 w-[200px] '>
              How good am I in Adobe Photoshop?
              <img src={close} alt='' className='w-[15px] h-[15px]' />
            </p>
            <p className='  font-bold px-4 py-1  text-[10px] text-gray-600 rounded-full border flex items-center gap-x-2 border-yellow-300 bg-yellow-50 w-[200px] '>
              Rate me in communication skills
              <img src={close} alt='' className='w-[15px] h-[15px]' />
            </p>
          </div>
        </div>
      </div>
      <div className='px-6'>
        <hr className='mt-[50px]' />
        <div className='flex items-center justify-between'>
          <Link to='/rating'>
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

export default Yes
