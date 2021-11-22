import React, { useEffect, useState } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import ListOfCards from '../Components/ListOfCards'
import ListOfLoadingCards from '../Components/ListOfLoadingCards'

function Fighter() {
    const collectionRef = query(collection(db, 'Heroes'), where('roles', 'array-contains', 'Fighter'))
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
            <div className='container mx-auto p-2 pt-4'>
                <div>
                    <h1 className='text-center text-2xl font-mono font-extrabold'>Fighter</h1>
                    <p>Fighters are close range combatants that possess a mix of offensive and defensive capabilities. While they don't have as much utility as a tank or as much damage as an assassin, a fighter's damage will add up over time to make it a major threat. Each fighter has a unique blend of mobility, damage, disruption and durability. Fighter is an intermediate melee heroes, between Tank durability or Assassin damage, hence make fighter serve as multi purpose combatant, such as Semi Tank, Crowd Controller, or Tank and Assassin.
                        A fighter is a type of role that has a combination of characteristics of a Tank and an Assassin. They can act as a semi-tank and a damage dealer because of their durability and damage. This role is versatile depending on the team lineup. They're sometimes used in soloing a lane or in accompanying an ally. They usually shine during the late game.</p>
                    <br />
                    <p>Fighters are the brawlers of the team. These heroes have a good balance between HP, defense and damage. Their balanced stats allow these heroes to get in and get out of fights alive.

                        If you love to be in the thick of the action while killing heroes, being a fighter is the role for you.

                        The most important attribute is their independence. While all heroes need to work together, fighters are usually the jack-of-all trades that have sufficient damage, durability, speed and survivability. They don't have the high damage that a midlane carry posses, and usually is it not necessary for them to support another player or be supported by one. A tank can focus on protecting weaker teammates if a fighter is able to hold his own. Effective solo lane heroes require skills that enable to dominate a lane without help from teammates.
                    </p>
                    <br />

                    <div className='space-y-3'> <p>There should be 3 key ingredient every Fighter user should know.</p>

                        <div className='space-y-3'>
                            <div className=''>
                                <h2 className=' font-mono font-semibold'>Ability to Solo Lane</h2>
                                <p className='pl-5'>You will take on higher pressure alone versus other lanes. The more enemies you hold in your lane, the more advantage your allies have. You will have to pressure the lane and force the enemy to defend it. Similar to the first mindset, the more enemies that wants to stop you, the better it is for your team.</p>

                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Versatile</h2>
                                <p className='pl-5'>Fighters are best of all world heroes, they can be played as a damage carry or a semi tank. Knowing when to play which role according to the demands from the team makes a great Fighter player</p>
                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Lane cutting</h2>
                                <p className='pl-5'>It's the strategy of going behind enemy turret and wiping the minions before they come in contact with your own minion wave. It is highly advantageous to do this as it adds extra pressure to the enemy tower. Without minion support the enemy is forced to turret hug and wait for allies., You or your team can also dive the turret with less risk.

                                    Lane cutting requires fast wave clear and some mobility/escape. It is risky as enemy in jungle or mid might gank you while your allies are too far away to help.</p>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='py-6'>
                    <h2 className='text-center font-mono font-semibold'>List of Fighter Heroes</h2>{heroData.length !== 0 ? <ListOfCards object={heroData} type='hero' /> : <ListOfLoadingCards type='hero' />}</div>

            </div>
        </div>
    )
}

export default Fighter
