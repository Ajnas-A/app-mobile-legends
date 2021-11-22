import React from 'react'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import { heroContext } from '../Context'

function HeroCardV3() {
    const history = useHistory()
    const { heroObj, setHeroObj } = useContext(heroContext)

    return (
        <div className='my-0 mx-auto md:mx-14 md:my-0  lg:mx-auto lg:w-5/6 '>
            {heroObj ? <div className='bg-blue-300 bg-opacity-0   rounded-lg shadow-3xl overflow-hidden h-full  '>
                <div className='flex   '>
                    <div className=' w-5/6  md:w-96 '>
                        <img className='object-cover    rounded-sm ' src={heroObj.image} alt="" />{/* h-full*/}
                    </div>
                    <div className='w-full h-full p-2 flex flex-col'>
                        <div className=' m-auto mt-5 pl-4'>
                            <h1 className=' font-mono font-extrabold text-5xl text-gray-700 text-center'>{heroObj.name}</h1>
                            <div className='flex space-x-4 justify-center'>
                                {heroObj.roles.map((e, key) => {
                                    return <p key={key} className='font-mono text-center font-bold text-lg text-green-900 border-b-4'>{e}</p>
                                })}
                            </div>
                        </div>
                        {
                            <div className=' p-4 px-10 space-y-6 h-full '>
                                <div className='hidden lg:block  '>
                                    <span className=' self-center text-2xl font-extrabold '>{heroObj.desc}</span>
                                </div>
                                <div className='bg-blue-300 bg-opacity-0 h-full space-y-6 '>
                                    <h1>Coins : {heroObj.price.coins}</h1>
                                    <h1>Diamonds : {heroObj.price.diamonds}</h1>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='pt-2'>
                    <div className='pt-0 p-4 h-full  break-words md:break-words   '>
                        <div className=' shadow  bg-opacity-0 hover:bg-green-200 hover:bg-opacity-40  rounded-md p-2 transition ease-in duration-300 mb-2 block lg:hidden '>
                            <div className=' '>
                                <span className=' self-center text-2xl font-extrabold'>{heroObj.desc}</span>
                            </div>
                        </div>
                        <div className=' shadow  bg-opacity-0 hover:bg-green-200 hover:bg-opacity-40  rounded-md p-2 transition ease-in duration-300 mb-2 '>
                            <div className='lg:flex-row flex flex-col space-x-2 justify-center items-center md:justify-start'>
                                <span className=' self-center text-2xl font-extrabold ' id='passiveName'>Passive : {heroObj.skills.passive.name}</span>
                                <div className='flex mr-0 mt-2 lg:mt-0 space-x-2 ml-2 lg:inline'>
                                    {
                                        heroObj.skills.passive.type.map((e, key) => {
                                            return <div key={key} className=' align-middle px-5  text-center flex md:inline rounded-md  p-1 bg-green-600 hover:bg-green-500 transition duration-200 break-words items-center  '>
                                                <span>{e}</span>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>

                            <span>{heroObj.skills.passive.desc}</span>
                        </div>
                        <div className=' shadow  bg-opacity-0 hover:bg-green-200 hover:bg-opacity-40  rounded-md p-2 transition ease-in duration-300 mb-2'>
                            <div className='lg:flex-row flex flex-col space-x-2 justify-center items-center md:justify-start'>
                                <span className=' self-center text-2xl font-extrabold'>First Skill : {heroObj.skills.skillOne.name}</span>
                                <div className='flex mr-0 mt-2 lg:mt-0 space-x-2 ml-2 lg:inline'>
                                    {
                                        heroObj.skills.skillOne.type.map((e, key) => {
                                            return <div key={key} className=' align-middle px-5  text-center flex md:inline rounded-md  p-1 bg-green-600 hover:bg-green-500 transition duration-200 break-words items-center  '>
                                                <span>{e}</span>

                                            </div>
                                        })
                                    }
                                </div>
                            </div>

                            <span>{heroObj.skills.skillOne.desc}</span>

                        </div>
                        <div className=' shadow  bg-opacity-0 hover:bg-green-200 hover:bg-opacity-40  rounded-md p-2 transition ease-in duration-300 mb-2'>
                            <div className='lg:flex-row flex flex-col space-x-2 justify-center items-center md:justify-start'>
                                <span className=' self-center text-2xl font-extrabold'>Second Skill : {heroObj.skills.skillTwo.name}</span>
                                <div className='flex mr-0 mt-2 lg:mt-0 space-x-2 ml-2 lg:inline'>
                                    {
                                        heroObj.skills.skillTwo.type.map((e, key) => {
                                            return <div key={key} className=' align-middle px-5  text-center flex md:inline rounded-md  p-1 bg-green-600 hover:bg-green-500 transition duration-200 break-words items-center  '>
                                                <span className=' inline-block'>{e}</span>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>

                            <span>{heroObj.skills.skillTwo.desc}</span>
                        </div>
                        <div className='shadow  bg-opacity-0 hover:bg-green-200 hover:bg-opacity-40  rounded-md p-2 transition ease-in duration-300 mb-2'>

                            <div className='lg:flex-row flex flex-col space-x-2 justify-center items-center md:justify-start'>
                                <span className=' self-center text-2xl font-extrabold'>{heroObj.skills.skillFour.type.length !== 0 ? 'Third Skill : ' : 'Ultimate : '}{heroObj.skills.skillThree.name}{console.log(heroObj.skills.skillFour)}</span>
                                <div className='flex mt-2 space-x-1 lg:mt-0 lg:inline w-full justify-center '>
                                    {
                                        heroObj.skills.skillThree.type.map((e, key) => {
                                            return <div key={key} className=' align-middle px-5  text-center flex md:inline rounded-md   p-1 bg-green-600 hover:bg-green-500 transition duration-200 break-words items-center '>
                                                <span className='inline-block'>{e}</span>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>

                            <span>{heroObj.skills.skillThree.desc}</span>
                        </div>
                        {heroObj.skills.skillFour.name != null &&
                            <div className='  shadow  bg-opacity-0 hover:bg-green-200 hover:bg-opacity-40  rounded-md p-2 transition ease-in duration-300 mb-2'>

                                <div className='lg:flex-row flex flex-col space-x-2 justify-center items-center md:justify-start'>
                                    <span className=' self-center text-2xl font-extrabold'>Ultimate : {heroObj.skills.skillFour.name}</span>
                                    <div className='flex  mt-2 lg:mt-0 space-x-2  lg:inline '>
                                        {
                                            heroObj.skills.skillFour.type.map((e, key) => {
                                                return <div key={key} className=' align-middle px-5  text-center flex md:inline rounded-md  p-1 bg-green-600 hover:bg-green-500 transition duration-200 break-words items-center'>
                                                    <span className=' inline-block'>{e}</span>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>

                                <span>{heroObj.skills.skillFour.desc}</span>
                            </div>
                        }
                    </div>
                </div>
            </div> : history.push('/heroes')}
        </div>
    )
}

export default HeroCardV3
