import React from 'react'
import man from '../Asset/my_surveys_grid.svg'
import calendar from '../Asset/calendar@3x.png'
import req from '../Asset/requested_surveys@3x.png'
import view from '../Asset/view_list@3x.png'
import { Link } from 'react-router-dom'
import reward from '../Asset/group-16.svg'
import girl from '../Asset/girl_red@3x.png'

const Home = () => {
  return (
    <div className='bg-gray-200 p-8  relative h-[100vh]'>
      <div className='flex justify-between items-center mb-7'>
        <div>
          <h1 className='font-bold'>My Survey</h1>
        </div>
        <div className='flex items-center gap-10'>
          <div>
            <select name='cars' id='cars'>
              <optgroup label='Swedish Cars'>
                <option value='volvo'>Volvo</option>
                <option value='saab'>Saab</option>
              </optgroup>
              <optgroup label='German Cars'>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </optgroup>
            </select>
          </div>
          <div className='flex'>
            <img src={req} alt='' className='w-[30px] h-[30px]' />
            <img src={view} alt='' className='w-[30px] h-[30px]' />
          </div>
          <div>
            <Link to='mysurveys/createSurvey'>
              <button className=' bg-blue-600  p-2 text-[14px] rounded-md text-white '>
                CREATE SURVEY
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex gap-8'>
        <div className='p-4 border bg-white'>
          <img src={man} alt='' className='bg-gray-200' />
          <h1 className='font-bold my-4'>Career-Skill feedback</h1>
          <div className='flex items-center gap-2'>
            <img src={calendar} alt='' className='w-[20px] h-[20px]' />
            <p>11 Mar 2020</p>
          </div>
          <button className='mt-4 bg-blue-600 w-full p-3 rounded-lg text-white font-bold'>
            VIEW RESPONSE
          </button>
        </div>
        <div className='p-4 border bg-white'>
          <img src={man} alt='' className='bg-gray-200' />
          <h1 className='font-bold my-4'>Career-Skill feedback</h1>
          <div className='flex items-center gap-2'>
            <img src={calendar} alt='' className='w-[20px] h-[20px]' />
            <p>11 Mar 2020</p>
          </div>
          <button className='mt-4 bg-blue-600 w-full p-3 rounded-lg text-white font-bold'>
            VIEW RESPONSE
          </button>
        </div>
        <div className='p-4 border bg-white'>
          <img src={man} alt='' className='bg-gray-200' />
          <h1 className='font-bold my-4'>Career-Skill feedback</h1>
          <div className='flex items-center gap-2'>
            <img src={calendar} alt='' className='w-[20px] h-[20px]' />
            <p>11 Mar 2020</p>
          </div>
          <button className='mt-4 bg-blue-600 w-full p-3 rounded-lg text-white font-bold'>
            VIEW RESPONSE
          </button>
        </div>
        <div className='p-4 border bg-white'>
          <img src={man} alt='' className='bg-gray-200' />
          <h1 className='font-bold my-4'>Career-Skill feedback</h1>
          <div className='flex items-center gap-2'>
            <img src={calendar} alt='' className='w-[20px] h-[20px]' />
            <p>11 Mar 2020</p>
          </div>
          <button className='mt-4 bg-blue-600 w-full p-3 rounded-lg text-white font-bold'>
            VIEW RESPONSE
          </button>
        </div>
      </div>
      <div className='flex items-center bg-white  absolute right-6 bottom-9 px-4 mt-10 '>
        <div className='flex items-center gap-x-2 py-4 mr-16'>
          <p>Create or Answer 10 survey & earn</p>
          <img src={reward} alt='' />
          <p className='text-blue-600 font-bold'>200</p>
        </div>
        <div className='ml-10 '>
          <img
            src={girl}
            alt=''
            className='w-[100px] h-[80px] absolute right-0 bottom-1 '
          />
        </div>
      </div>
    </div>
  )
}

export default Home
