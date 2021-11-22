import React from 'react'

function LoadingClassCards() {
    return (
        <div className='animate-pulse '>
            <div className='h-full flex flex-col md:flex md:flex-row backdrop-filter backdrop-blur-md  rounded-xl group  shadow-3xl  hover:border-gray-400 bg-opacity-60   '>
                <div className='p-0 w-full  md:w-2/4 rounded-t-lg  md:rounded-l-md md:rounded-r-none   mr-0 pr-0 bg-cover '>
                    <div className='bg-gray-200 w-full h-full  flex justify-center items-center p-2 bg-opacity-60  rounded-t-lg md:rounded-l-md md:rounded-r-none bg-cover'>
                        <p className=''></p>
                    </div>
                </div>
                <div className=' w-full md:w-2/4 transition duration-300 ease-out h-full   border-opacity-25 rounded-b-lg md:rounded-r-lg   p-4 bg-blue-300 bg-opacity-0 group-hover:bg-green-100 group-hover:bg-opacity-60 md:rounded-l-none space-y-4 '>
                    <div className='bg-gray-200 w-full h-8 flex items-center justify-center bg-opacity-60'>
                        <h1 className='text-center'>Loading...</h1>
                    </div>
                    <div className='h-96 bg-gray-100 bg-opacity-60 rounded-sm'> </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingClassCards
