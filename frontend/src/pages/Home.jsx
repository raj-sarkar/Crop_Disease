import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Home = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    console.log(selectedImage)
  }, [selectedImage])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    // console.log(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      // console.log('reader loaded',reader.result)
      setSelectedImage(reader.result)
    }
  }



  const handleSubmit = () => {

  }

  return (
    <div className='p-4'>

      <div className='flex flex-row gap-1  '>
        <div className='flex-2'>
          <motion.div
            className=' w-full font-medium '
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

          <div className='mt-10  flex flex-col items-center  '>
            <img
              src={selectedImage || "/leaf.png"}
              alt="Leaf placeholder"
              className='w-sm border-2 border-dotted rounded p-1'
            />
            <input
              id="imageInput"
              type="file"
              className="hidden"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleImageChange}
            />
            <label
              htmlFor="imageInput"
              className="mt-2 cursor-pointer inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
            >
              Upload Image
            </label>


            <button
              className='cursor-pointer rounded bg-emerald-600 hover:bg-emerald-700 text-white mt-2 p-1 w-1/2 text-lg'
              onClick={handleSubmit}
            >Check Disease</button>
          </div>

        </div>
        <div className="flex-1 hidden sm:block">
          <img
            src="/image.png"
            alt=""
            className="w-full  object-contain"
            draggable={false}
          />
        </div>
      </div>

      <div className=''>

      </div>

    </div>
  )
}

export default Home