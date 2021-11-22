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

    let array = ['bg-yellow-400', 'bg-green-400']

    return (
        <div className=' p-10 container mx-auto flex space-x-4  text-gray-200'>


            <div className='h-500 w-300 border-2 bg-gradient-to-tl from-newBlack to-grad hover:shadow-customBlack border-green-300 border-opacity-40 hover:border-green-600 hover:border-opacity-40 rounded-md  hover:-translate-y-4 transform transition duration-300'>
                <div className='p-2 flex flex-col justify-around items-center h-full w-full space-y-4'>
                    <div className='h-2/4 w-full rounded-md'><img className='h-full w-full bg-cover rounded-md' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f33b4d3e-3a19-4221-bf40-6bf0d12175ce/dedhgon-6b1894f6-78c1-4d4d-b508-7e20a8fd71a1.jpg/v1/fill/w_191,h_350,q_70,strp/saber_golden_flash_by_fachrifhr_dedhgon-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEwMCIsInBhdGgiOiJcL2ZcL2YzM2I0ZDNlLTNhMTktNDIyMS1iZjQwLTZiZjBkMTIxNzVjZVwvZGVkaGdvbi02YjE4OTRmNi03OGMxLTRkNGQtYjUwOC03ZTIwYThmZDcxYTEuanBnIiwid2lkdGgiOiI8PTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xoese9bJ_3gLIY8brEg9pJ70E8kH4IguBm_cgzavQV8' alt="" /></div>
                    <div className='h-2/4 w-full flex flex-col justify-between items-center space-y-4'>
                        <div className='flex w-full justify-between'>
                            <div>
                                <h2 className=' text-2xl font-gidole font-extrabold'>Angela</h2>
                                <div className='flex space-x-2 '><h2>Fighter</h2>
                                    <h2>Assassin</h2></div>

                            </div>

                            <div className='flex flex-col items-end' >
                                <h2>Coin : 32000</h2>
                                <h2>Diamond : 599</h2>
                            </div>

                        </div>
                        <div className='flex-grow   w-full '><p className=' line-clamp-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus nulla nihil corporis? Explicabo, distinctio cumque, iure accusamus fuga, assumenda quo officia sit veritatis culpa est unde ea molestiae iusto illum.</p></div>




                        <div onClick={() => { displayHero() }} className='h-10 hover:bg-green-300 hover:bg-opacity-40 transition duration-300 ease-in p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer rounded w-full text-center flex items-center justify-center'><h2>Readmore</h2></div>
                    </div>


                </div>

            </div>

            <div className={`h-500 w-300 border-2 bg-gradient-to-tl from-newBlack to-grad  border-green-300 border-opacity-40 hover:border-green-600 hover:border-opacity-40 rounded-md hover:shadow-xl hover:-translate-y-4 transform transition duration-300`}>
                <div className='p-2 flex flex-col justify-around items-center h-full w-full space-y-4'>
                    <div className='h-2/4 w-full rounded-md'><img className='h-full w-full bg-cover rounded-md' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f33b4d3e-3a19-4221-bf40-6bf0d12175ce/dedhdzc-74be38e4-dbbe-494b-a0a0-ed7c5c4011bf.jpg/v1/fill/w_191,h_350,q_70,strp/roger_dr_beast_by_fachrifhr_dedhdzc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEwMCIsInBhdGgiOiJcL2ZcL2YzM2I0ZDNlLTNhMTktNDIyMS1iZjQwLTZiZjBkMTIxNzVjZVwvZGVkaGR6Yy03NGJlMzhlNC1kYmJlLTQ5NGItYTBhMC1lZDdjNWM0MDExYmYuanBnIiwid2lkdGgiOiI8PTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GB27pZVMVPBvv84Z5KPqUb1F5pTgsvs9ULrkv38_1zg' alt="" /></div>
                    <div className='h-2/4 w-full flex flex-col justify-between items-center space-y-4'>
                        <div className='flex w-full justify-between'>
                            <div>
                                <h2 className=' text-2xl font-gidole font-extrabold'>Angela</h2>
                                <div className='flex space-x-2 '><h2>Fighter</h2>
                                    <h2>Assassin</h2></div>

                            </div>

                            <div className='flex flex-col items-end' >
                                <h2>Coin : 32000</h2>
                                <h2>Diamond : 599</h2>
                            </div>

                        </div>
                        <div className='flex-grow   w-full '><p className=' line-clamp-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus nulla nihil corporis? Explicabo, distinctio cumque, iure accusamus fuga, assumenda quo officia sit veritatis culpa est unde ea molestiae iusto illum.</p></div>




                        <div onClick={() => { displayHero() }} className='h-10 hover:bg-hexcode hover:bg-opacity-40 transition duration-300 ease-in p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer rounded w-full text-center flex items-center justify-center'><h2>Readmore</h2></div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default HeroCardV4
