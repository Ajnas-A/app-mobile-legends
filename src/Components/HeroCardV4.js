import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { heroContext } from '../Context';

function HeroCardV4({ heros }) {


    const history = useHistory()
    const userHero = useContext(heroContext)

    const displayHero = () => {
        userHero.setHeroObj(heros)
        history.push(`/hero-profile/${heros.name}`)
    }

    return (
        <div className=''>
            <div className={`h-500 w-300  border-gray-400 bg-gradient-to-tl from-newBlack to-grad text-gray-300 rounded-md hover:shadow-customBlack hover:-translate-y-4 transform transition duration-300 `}>
                <div className='p-2 flex flex-col justify-around items-center h-full w-full space-y-4 '>
                    <div className='h-2/4 w-full rounded-md overflow-hidden '><img className='h-full w-full bg-cover rounded-t-md ' src={heros ? heros.image : ''} alt="" /></div>
                    <div className='h-2/4 w-full flex flex-col justify-between items-center space-y-4'>
                        <div className='flex w-full justify-between'>
                            <div>
                                <h2 className=' text-2xl font-gidole font-extrabold'>{heros ? heros.name : ''}</h2>
                                <div className='flex space-x-2 '>{heros && heros.roles.map((e) => {
                                    return <h2 className=' font-medium text-sm'>{e}</h2>
                                })}</div>
                                <h2></h2>
                            </div>

                            <div className='flex flex-col items-end' >
                                <h2>Coin : {heros ? heros.price.coins : ''}</h2>
                                <h2>Diamond : {heros ? heros.price.diamonds : ''}</h2>
                            </div>

                        </div>
                        <div className='flex-grow   w-full '><p className=' line-clamp-4'>{heros ? heros.desc : ''}</p></div>




                        <div onClick={() => { displayHero() }} className='h-10 hover:bg-green-400 hover:text-black  transition duration-300 ease-in p-2 border-2 border-gray-300 hover:border-gray-600 cursor-pointer rounded w-full text-center flex items-center justify-center group'><h2 className='group-hover:scale-110 transform duration-300'>Readmore</h2></div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default HeroCardV4
