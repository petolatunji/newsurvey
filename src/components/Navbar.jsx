import React from 'react'
import dropdown from '../Asset/dropdown.png'
import manager from '../Asset/manager-5.svg'
import reward from '../Asset/group-16.svg'
import pp from '../Asset/R.png'
import { BsFillBellFill } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown, MdCalendarMonth } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='flex items-center bg-blue-600 text-white font-Montserrat p-2 font-medium text-[14px] leading-6 '>
      <div className='flex items-center ml-[600px] gap-x-10'>
        <div className='flex items-center'>
          <p className=''>Learn</p>
          <MdOutlineKeyboardArrowDown className='text-[22px]' />
        </div>
        <div className='flex items-center'>
          <p>Network</p>
          <MdOutlineKeyboardArrowDown className='text-[22px]' />
        </div>
        <div className='flex items-center'>
          <p>Evaluate</p>
          <MdOutlineKeyboardArrowDown className='text-[22px]' />
        </div>
      </div>
      <div className='flex items-center gap-x-10 ml-6 '>
        <p>Jobs</p>
        <div className='flex items-center'>
          <img src={manager} alt='' />
          <div className='items-center m-0'>
            <p>1305</p>
            <p className='leading-none font-light text-[10px]'>Profile Score</p>
          </div>
        </div>
        <div className='flex items-center'>
          <img src={reward} alt='' />
          <div>
            <p>400</p>
            <p className='leading-none font-light text-[10px]'>Tokens</p>
          </div>
        </div>
        <MdCalendarMonth className='text-[26px]' />
        <BsFillBellFill className='text-[26px]' />
      </div>
      <div>
        <div className='flex items-center ml-7'>
          <img src={pp} alt='' className='w-[30px] h-[30px] ' />
          <div className='flex items-center ml-2'>
            <p>Peterdev</p>
            <MdOutlineKeyboardArrowDown className='text-[22px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
