import React from 'react'
import { useHistory } from 'react-router'
import homeImage from '../images/HomeImage.jpg'

function HomePage() {

    const history = useHistory()

    return (
        <div className=' ' >
            <div className=' sm:h-full  '>
                <div className='flex flex-col space-y-6 '>
                    <div className='w-full bg-cover h-96 md:h-278 pb-4 border-b-8 border-gray-300 border-opacity-30'><img className='w-full bg-cover h-full rounded-sm ' src={homeImage} alt="" /></div>
                    <div className='p-4 space-y-4 container mx-auto'>
                        <h1 className='text-center font-mono font-extrabold text-2xl'>Get to know about Mobile Legends</h1>
                        <h2 className='font-mono font-extrabold text-lg'>What is Mobile Legends?</h2>
                        <p className='  text-md'>Mobile Legends: Bang Bang  is a mobile multiplayer online battle arena (MOBA) developed and published by Moonton, a subsidiary of ByteDance. Released in 2016, the game has become popular in Southeast Asia and was among the games chosen for the first medal event esports competition at the 2019 Southeast Asian Games in the Philippines.</p>
                        <p className='  text-md'>Mobile Legends: Bang Bang is a multiplayer online battle arena (MOBA) game designed for mobile phones. The two opposing teams fight to reach and destroy the enemy's base while defending their own base for control of a path, the three "lanes" known as "top", "middle", and "bottom", which connects the bases. Weaker computer-controlled characters, called "minions", spawn at team bases and follow the three lanes to the opposite team's base, fighting enemies and turrets.</p>
                        <p className=' text-md'> The two opposing teams fight to reach and destroy the enemy's base, while defending their own base for control of a path, the three lanes known as top, middle and bottom, which connects the bases. Weaker computer-controlled characters, called minions, spawn at team bases and follow the three lanes to the opposite team's base, fighting enemies and turrets. Each team constitutes five players, who each control an avatar, known as a hero, from their own device. Heroes are grouped into 6 different roles, Tank, Fighter, Assassin, Marksman, Mage , and Support </p>
                    </div>

                    <div className='space-y-2'>
                        <div className='container mx-auto p-4 '> <h2 className='font-mono font-extrabold  text-center text-2xl'>Game Features</h2></div>
                        <div className='space-y-2 p-2 '>
                            <div className=' p-3 shadow-lg rounded-sm '>
                                <div className='flex flex-col sm:flex-row w-full justify-start  space-x-3 '>
                                    <img className='w-full  sm:w-2/4 rounded-sm ' src="https://lh3.googleusercontent.com/a-UwSZsmhnbWWH8SQ3K2wjeCz6HzsFXcShiie-OJOFfkExYd1-2IQJIhBZWStpDmIco" alt="" />

                                    <div className='w-full sm:w-2/4 p-5 space-y-4 sm:space-y-10'>
                                        <h2 className='text-center font-mono font-bold text-lg'>Classic 5v5 maps</h2>
                                        <p>Real-time 5v5 battles against real opponents. Fight over 3 lanes to take the enemy’s tower. 4 jungle areas. 18 defense towers. 2 Wild Bosses. Complete reproductions of classic MOBA maps. Full-on 5v5, Human vs. Human battles. A triumphant return to genuine MOBA gameplay.</p>
                                    </div>
                                </div>

                            </div>
                            <div className=' p-3 shadow-lg rounded-sm '>
                                <div className='flex flex-col sm:flex-row-reverse w-full justify-start  space-x-3'>

                                    <img className='w-full  sm:w-2/4 rounded-sm ' src="https://play-lh.googleusercontent.com/ijYpW7_9FWTOMKoCzxRMYkHXfjwzhr60dbVxyQaNqm7TyFZHdyAAecRiCwV3N_bcXGR-=w720-h310-rw" alt="" />

                                    <div className='w-full sm:w-2/4 p-5  space-y-4 sm:space-y-10'>
                                        <h2 className='text-center font-mono font-bold text-lg'>Win with Teamwork & Strategy</h2>
                                        <p>Block damage, control the enemy, and heal teammates! Choose from Tanks, Mages, Marksmen, Assassins, Supports, etc. to anchor your team or be match MVP! New heroes are constantly being released!</p>
                                    </div>
                                </div>

                            </div>
                            <div className=' p-3 shadow-lg rounded-sm '>
                                <div className='flex flex-col sm:flex-row w-full justify-start  space-x-3'>
                                    <div className='w-full sm:w-2/4'>
                                        <img className='w-full h-full rounded-sm ' src="https://play-lh.googleusercontent.com/zZ6HH6eijxMr_amK5COhv8Ag7qxf8sx0OZhRBN6Ib26oP9AwFW8UFo0a6G5ZaAvKBTU=w720-h310-rw" alt="" />
                                    </div>
                                    <div className='w-full sm:w-2/4 p-5  space-y-4 sm:space-y-10 '>
                                        <h2 className='text-center font-mono font-bold text-lg'> Fair Fights, Carry Your Team to Victory</h2>
                                        <p>Just like classic MOBAs, there is no hero training or paying for stats. Winners and losers are decided based on skill and ability on this fair and balanced platform for competitive gaming. Play to Win, not Pay to Win.</p>
                                    </div>
                                </div>

                            </div>
                            <div className=' p-3  shadow-lg rounded-sm'>
                                <div className='flex flex-col sm:flex-row-reverse w-full justify-start  space-x-3'>

                                    <div className='w-full sm:w-2/4'>
                                        <img className='w-full h-full rounded-sm ' src="https://play-lh.googleusercontent.com/fFFDcmE3CrhLn8y0Td21aGJXbu7XmDXATf4--XxjcJAEKENCv_ccT0yskvkxVvDZqg=w720-h310-rw" alt="" />
                                    </div>
                                    <div className='w-full sm:w-2/4 p-5  space-y-4 sm:space-y-10 '>
                                        <div>
                                            <h2 className='text-center font-mono font-bold text-lg '>Simple Controls, Easy to Master and 10 Second Matchmaking, 10 Minute Matches</h2>
                                        </div>


                                        <div>
                                            <p>With a virtual joystick on the left and skill buttons on the right, 2 fingers are all you need to become a master! Autolock and target sifting allow you to last hit to your heart’s content. Never miss! And a convenient tap-to-equip system lets you focus on the thrill of battle!</p>
                                            <br />
                                            <p>Matchmaking only takes 10 seconds, and battles last 10 minutes, glossing over the quiet early-game leveling up and jumping right into intense battles. Less boring waiting and repetitive farming, and more thrilling action and fist-pumping victories. At any place, at any moment, just pick up your phone, fire up the game, and immerse yourself in heart-pounding MOBA competition.
                                            </p></div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomePage
