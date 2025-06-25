import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='p-4'>

      <div className='flex flex-row gap-1 '>
        <motion.div
          className=' flex-2 font-medium w-32'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className='text-3xl sm:text-5xl text-emerald-600'>🍃 Cure <sup>n</sup> Grow
          </h1>
          <p className='mt-2 text-gray-600 text-base sm:text-2xl'>
            Detect plant diseases instantly and get expert-backed cures with Cure n Grow.
            <span className='hidden sm:block'>
            Our AI-powered platform analyzes crop images to identify infections, deficiencies, and pest damage in real time.
            Whether you're a farmer, gardener, or agriculture student, <span className='whitespace-nowrap'>Cure <sup>n</sup> Grow</span> helps you make timely decisions, improve crop yield, and reduce losses.
            Join the future of smart farming with a tool that puts plant health in your hands.
            </span>
          </p>
        </motion.div>
        <div className="flex-1 hidden sm:block w-64 ">
          <img
            src="/image.png"
            alt=""
            className="w-full h-[400px] object-contain"
            draggable={false}
          />
        </div>
      </div>

      

    </div>
  )
}

export default Home