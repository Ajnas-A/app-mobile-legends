import React, { useEffect, useState } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import ListOfCards from '../Components/ListOfCards'
import ListOfLoadingCards from '../Components/ListOfLoadingCards'

function Tanks() {
    const collectionRef = query(collection(db, 'Heroes'), where('roles', 'array-contains', 'Tank'))
    const [heroData, setHeroData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collectionRef)
            setHeroData(data.docs.map((e) => { return { ...e.data(), id: e.id } }))
        }
        getData()

    }, [])


    return (
        <div className='h-auto'>
            <div className='container mx-auto p-2  pt-4'>
                <div>
                    <h1 className='text-center text-2xl font-mono font-extrabold'>TANK</h1>
                    <p>Tanks heroes are the most durable among all in mobile legends. These front-line giants help in attacking enemies. They're usually found leading the charge, choosing the right times and situations to initiate aggression. Many tanks can also protect their more fragile teammates by stunning or pushing around dangerous foes and limiting their damage potential. In Mobile Legends, most classes of heroes are really versatile in terms of abilities and with the item crafting variations a "tank" can be played as a DPS if you choose the right equipment. Tank has high defense and hit point, but low damage. When used properly, a tank could be the strongest hero in the game.</p>
                    <br />
                    <p>Tanks play a big role in the game.

                        As a tank, you are the frontliner, initiator, the one who will sustain the clash, and the one supporting your team, especially your team's carry hero.

                        Throughout the game, you'll babysit your hitter. Tanks don't usually solo lanes. Tanks may be durable but they don't have that much damage. Tanks should be, most of the time, with the hitter helping them clear up lanes, helping them farm, protecting them.

                        In teamfights, they would be the one setting up the clash. It costs experience in the game. Game awareness and map awareness is a must, but tanks should be really knowledgeable. They just don't go straight, they must be aware of the stats between your team and enemy team.


                        If your team is the underdog, then your role as the tank is to protect your teammates. By default, prioritize mages and marksmen, as they have the less chance of escaping from enemies, and are squishy. Fighters are more durable, they can have a higher chance of survivability compare to mages and MM. Supports are supposed to be in the backline, and they should be wary of their positioning; they should at least know where is the safe spot. Assassins have good mobility, so they'll have higher chance of escaping.

                    </p>
                    <br />

                    <div className='space-y-3'> <p>There should be 3 key ingredient every Tank user should know.</p>

                        <div className='space-y-3'>
                            <div className=''>
                                <h2 className=' font-mono font-semibold'>Picking the right moments to engage.</h2>
                                <p className='pl-5'>Are you attacking? Are you defending? When attacking find those who are squishy such as mages and marksmen. This is a job for CC tanks, you are the initiator. Switch the situation, save your CC to counter enemy ganks and prioritize others’ safety. Don’t worry if you die here and there, you are basically doing your job and it is better if trades were even (don’t feed lol).</p>

                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Buying items according to enemies’ lineup.</h2>
                                <p className='pl-5'>Look at enemies' lineup. More magic damage, buy Magic Defense. More physical attack, buy Armor. 4 equipment slots for your main core build, 1 for boots and 1 more slot for situational item. Consider your equipment choices, do you need more CD? Shield? Study the unique passive certain item has. If you are on late game (25mins+), I would rather sell the boots and buy another situational item.</p>
                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Stay cool under pressure.</h2>
                                <p className='pl-5'>  Don’t let the pressure overwhelm you. Teammates talking trash because you’re not playing good? Just ignore and mute them if situation become worse. You don’t have the time to argue because you need to be on guard at all times as enemy can attack from any directions. And trash talking just adds fuel to the flame.</p>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='py-6'>
                    <h2 className='text-center font-mono font-semibold'>List of Tank Heroes</h2>{heroData.length !== 0 ? <ListOfCards object={heroData} type='hero' /> : <ListOfLoadingCards type='hero' />}</div>

            </div>
        </div>
    )
}

export default Tanks
