import React from 'react'
import { useHistory } from 'react-router'
function ClassCards({ image }) {
    const history = useHistory()
    return (
        <div className=''>
            <div className=' h-full flex flex-col md:flex md:flex-row backdrop-filter backdrop-blur-md  rounded-xl group  shadow-3xl hover:shadow-customBlack  transition duration-300  hover:border-gray-400    '>
                <div className=' w-full h-full sm:h-full  md:w-2/4 rounded-t-lg  md:rounded-l-md md:rounded-r-none bg-cover '>
                    <img className=' rounded-t-lg md:rounded-l-md h-full w-full  md:rounded-r-none bg-cover' src={image.image_url} alt="Tigreal" />
                </div>
                <div className=' w-full md:w-2/4 transition duration-300 ease-out h-full   border-opacity-25 rounded-b-lg md:rounded-r-lg   p-4 bg-blue-300 bg-opacity-0 group-hover:bg-green-100 group-hover:bg-opacity-60 md:rounded-l-none space-y-4 '>
                    <h1 className='text-center'>{image.title}</h1>
                    <div className='h-44 sm:h-44 overflow-scroll scrollbar-hide '> <p className=' line-clamp-6'>{image.desc}</p></div>
                    <div onClick={() => {
                        history.push(`/${image.title.toLowerCase()}`)
                    }} className='h-10 hover:bg-green-400 hover:text-black  transition duration-300 ease-in p-2 border-2 border-gray-300  cursor-pointer rounded w-full text-center flex items-center justify-center group-hover:border-gray-600'><h2 className='hover:scale-110 transform duration-300 w-full'>Readmore</h2></div>
                </div>
            </div>
        </div>
    )
}

export default ClassCards
