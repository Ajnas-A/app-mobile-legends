import React, { useEffect, useState } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import ListOfCards from '../Components/ListOfCards'
import ListOfLoadingCards from '../Components/ListOfLoadingCards'

function Support() {
    const collectionRef = query(collection(db, 'Heroes'), where('roles', 'array-contains', 'Support'))
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
                    <h1 className='text-center text-2xl font-mono font-extrabold'>Support</h1>
                    <p>Support role is to aid and help protect your allies in any situation. Your role is is to shield or heal them, to tanking some damage or sacrificing yourself to keep others alive. You are often giving up the glorious kills in the game to support others, but in the end its usually the support to secure the true MVP award. Support heroes usually lane with the marksman in top lane or at mid lane in order to be able to travel quickly where they are needed.</p>
                    <br />
                    <p>Support is a role that plays an important role in gameplay. Having a hero support on your team will make it easier for you to do war. You can also use Hero support as a damage dealer at the end of the game. There are tips for playing Mobile Legends support that you need to know.

                        In the current meta, the support role in Mobile Legends has been taken over by a mage hero because pure support heroes themselves are said to lack full power when used in gameplay. The mage hero besides being able to cover properly, the damage generated by him is also quite large so it is more profitable for the team.

                    </p>
                    <br />

                    <div className='space-y-3'> <p>There should be 3 key ingredient every Support user should know.</p>

                        <div className='space-y-3'>
                            <div className=''>
                                <h2 className=' font-mono font-semibold'>Provide Cover.</h2>
                                <p className='pl-5'>The main task of hero support in Mobile Legends is to cover the hero core. By providing a good cover, your core hero will automatically be safer and can do farming quietly. This will benefit you in terms of net worth and make the development of your hero core better.</p>

                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Open Map</h2>
                                <p className='pl-5'>In addition to providing cover, the task of hero support is to open the map for his teammates. You can use your skill traps that are placed on the ambush or stay in ambush. Make sure to master ambush properly when playing so that you can monitor the enemy’s position.</p>
                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Provide Follow Up Damage</h2>
                                <p className='pl-5'>When your core hero is fighting against your opponent’s hero, help him by using your attack skills. That will give enough follow-up damage and give kills to the core hero so that his networth and level can grow even more.</p>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='py-6'>
                    <h2 className='text-center font-mono font-semibold'>List of Support Heroes</h2>{heroData.length !== 0 ? <ListOfCards object={heroData} type='hero' /> : <ListOfLoadingCards type='hero' />}</div>

            </div>
        </div>
    )
}

export default Support