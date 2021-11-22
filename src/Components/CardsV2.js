import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { heroContext } from '../Context';

function CardsV2({ heros }) {
    const history = useHistory()
    const userHero = useContext(heroContext)


    const displayHero = () => {
        userHero.setHeroObj(heros)
        history.push(`/hero-profile/${heros.name}`)
    }

    return (
        <div onClick={() => { displayHero() }} className={`container h-full cursor-pointer  max-w-sm  rounded-sm shadow-3xl overflow-hidden  hover:scale-105 border-opacity-50 border-gray-400 hover:border-opacity-75 hover:border-blue-900  text-gray-800 bg-opacity-10 transition duration-300 ease-in transform bg-green-200  sm:bg-transparent sm:backdrop-filter sm:backdrop-blur-lg `}>
            <div>
                <img className="w-full h-96 border-1  shadow-lg " src={heros ? heros.image : ''} alt='#' />
                <div className='hover:bg-green-100 hover:bg-opacity-60  h-full space-y-3 '>
                    <div className="px-6 py-4 h-96  ">
                        <div className=" text-xl text-center font-extrabold font-mono">{heros ? heros.name : ''}</div>
                        <div className=' h-full overflow-y-scroll scrollbar-hide'>
                            <p className="group-hover:text-gray-600 text-base  font-Gidole font-bold  ">{heros ? heros.desc : ''}
                            </p></div>

                    </div>
                    <div className='p-5 block justify-center align-middle h-30 text-center md:block'>
                        <div className='block md:flex md:justify-center md:align-middle'>
                            {
                                heros && heros.roles.map((e, key) => {
                                    return <div key={key} className="inline-block hover:scale-110 transform transition duration-300 group-hover:bg-gray-500 group-hover:text-gray-50 hover:bg-gray-600 hover:text-gray-50 cursor-pointer  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 md:block ">{e}</div>
                                })
                            }
                        </div>
                        <div>
                            <div className='inline-block justify-center'>
                                <div className='flex justify-center  hover:scale-110 transform transition duration-300 group-hover:bg-gray-500 group-hover:text-gray-50 hover:bg-gray-600 hover:text-gray-50 cursor-pointer  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                                    </svg>
                                    <span className="inline-block ">{heros ? heros.price.coins : ''}</span>
                                </div>
                            </div>
                            <div className='inline-block justify-center '>
                                <div className=' space-x-2 flex justify-center  hover:scale-110 transform transition duration-300 group-hover:bg-gray-500 group-hover:text-gray-50 hover:bg-gray-600 hover:text-gray-50 cursor-pointer  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" className="h-5 w-5 text-blue-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg>
                                    <span className="inline-block ">{heros ? heros.price.diamonds : ''}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardsV2
