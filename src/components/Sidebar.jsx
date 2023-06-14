import React from 'react'
import reward from '../Asset/my_surveys.svg'
import rew from '../Asset/requested_surveys_inactive@2x.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex flex-col p-4 w-[20%] relative'>
      <div>
        <h1 className='font-bold text-xl'>Survey</h1>
        <hr className='my-4' />
      </div>

      <div className=''>
        <Link to='/'>
          <div className='flex gap-3 items-center text-blue-600 font-bold my-5'>
            <img src={reward} alt='' />
            <h1>My Surveys</h1>
          </div>
        </Link>

        <div className='flex gap-3 items-center text-gray-600'>
          <img src={rew} alt='' className='w-[20px]' />
          <h1>My Surveys</h1>
        </div>
      </div>
      <div className='absolute bottom-9'>
        <p className='font-bold '>" Hard work will pay off later, laziness "</p>
        <p className='font-bold text-gray-400 mt-2'>-Adam Smith</p>
      </div>
    </div>
  )
}

export default Sidebar
