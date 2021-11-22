import React from 'react'

function LoadingCard() {

    return (

        <div className='animate-pulse'>
            <div className={`h-500 w-300  border-gray-400 bg-gradient-to-tl from-newBlack to-grad text-gray-300 rounded-md hover:shadow-2xl hover:-translate-y-4 transform transition duration-300  `}>
                <div className='p-2 flex flex-col justify-around items-center h-full w-full space-y-3'>
                    <div className='h-2/4 w-full rounded-md overflow-hidden bg-gray-300 bg-opacity-60 '></div>
                    <div className='h-2/4 w-full flex flex-col justify-between items-center space-y-4'>

                        <div className='grid grid-cols-3 grid-rows-6 w-full h-full gap-1 ' >
                            <div className='bg-gray-400 bg-opacity-30  text-center col-span-3'>Loading...</div>
                            <div className='bg-gray-200 bg-opacity-30 col-span-2 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>
                            <div className='bg-gray-200 bg-opacity-30 col-span-2 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>
                            <div className='bg-gray-200 bg-opacity-30 col-span-3 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>
                            <div className='bg-gray-200 bg-opacity-30 '></div>

                        </div>







                        <div className='h-10 hover:bg-gray-300 hover:text-black  transition duration-300 ease-in p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer rounded w-full text-center flex items-center justify-center group'><h2 className='group-hover:scale-110 transform duration-300'>.....</h2></div>
                    </div>


                </div>

            </div>

        </div>

    )
}

export default LoadingCard
