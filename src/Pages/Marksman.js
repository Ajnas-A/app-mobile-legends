import React, { useEffect, useState } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import ListOfCards from '../Components/ListOfCards'
import ListOfLoadingCards from '../Components/ListOfLoadingCards'

function Marksman() {
    const collectionRef = query(collection(db, 'Heroes'), where('roles', 'array-contains', 'Marksman'))
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
                    <h1 className='text-center text-2xl font-mono font-extrabold'>Marksman</h1>
                    <p>Traditionally, MMs are defined by their ability to inflict ranged physical damage through normal/AA (auto attacks). They are often called ADC (attack, damage, carry). Due to their fast, ranged and powerful AA, that scales with level and items, they are oftentimes the hero in the team that deals the highest DPS (damage per second) and responsible for taking down turrets (Push).

                        Their range and damage are inhibited by their weak early game, low health and item dependency. Oftentimes MMs also have very limited mobility, ability to escape and lack utility such as crowd control skills, making them reliant on tanks or towers to protect them.

                        Not all MMs are equal in Mobile Legends and there are heroes with abilities that mitigate the inherent weaknesses of the class. Some MMs have mobility and escape ability, high early game damage, longer or shorter range, and reliance on activated skills versus normal attacks. While each MM require advanced strategies to be effective, this basic guide aims to be a useful introduction.</p>


                    <br />

                    <div className='space-y-3'> <p>There should be 3 tips every Marksman user should know.</p>

                        <div className='space-y-3'>
                            <div className=''>
                                <h2 className=' font-mono font-semibold'>Farming.</h2>
                                <p className='pl-5'> Marksman is without a doubt the ‘damage dealer’ in MLBB. That’s why farming are very crucial for this type of hero. You need to be at least at 1–2 levels higher than your allies, especially your enemies.</p>

                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Basic Attack</h2>
                                <p className='pl-5'>For most Marksman their main source of damage is from Basic Attack. Always use your basic attack and abilities on the enemy when they’re in range</p>
                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Learn how to Kite</h2>
                                <p className='pl-5'>Kiting involves attacking the enemy whilst you run backward. Because you have range, you are able to keep attacking them whilst running away. </p>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='py-6'>
                    <h2 className='text-center font-mono font-semibold'>List of Marksman Heroes</h2>{heroData.length !== 0 ? <ListOfCards object={heroData} type='hero' /> : <ListOfLoadingCards type='hero' />}</div>

            </div>
        </div>
    )
}

export default Marksman
