import React from 'react'

const Smodal = ({ visible, onClose }) => {
  const handleOnClose = () => {
    onClose()
  }

  if (!visible) return null
  return (
    <div
      onClick={handleOnClose}
      className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'
    >
      <div className='bg-white p-8 flex flex-col items-center rounded-xl w-72'>
        <h1 className='font-bold text-green-500'>Survey Sent Successfully</h1>
        <p className='text-center my-4'>
          Your survey sent successfully to your selected connections
        </p>
        <button>Hurry</button>
      </div>
    </div>
  )
}

export default Smodal
