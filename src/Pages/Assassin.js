import React, { useEffect, useState } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import ListOfCards from '../Components/ListOfCards'
import ListOfLoadingCards from '../Components/ListOfLoadingCards'

function Assassin() {
    const collectionRef = query(collection(db, 'Heroes'), where('roles', 'array-contains', 'Assassin'))
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
                    <h1 className='text-center text-2xl font-mono font-extrabold'>Assassin</h1>
                    <p>An Assassin is an agile hero that specializes in killing or disabling roaming targets picking them of as they try to replenish HP. Focused on infiltration, deception, and mobility, assassins are opportunistic hunters who find favorable moments within a fight before jumping into the fray. Regardless of the size of the enemy team, assassins specializes in positioning and artful killing. They strike when the time is right – no sooner, no later. Assassins are more suitable to be played by experienced players as they have low HP and high burst damage. They are ideal for taking out opponents easily, but are easier to be killed due to bad positioning and wrong timing.</p>
                    <br />
                    <p>Most Assassins have high burst skills which allow them to kill enemies quickly, but there are also those who have single target skills with large damage. An assassin is a hero who must be able to kill enemies who have little blood or have low defenses. So before that, you have to prepare yourself with enough items and levels to kill.

                        The main task of an assassin is clear, namely to kill enemy heroes. If you have to choose who to kill first, the priority is usually the Marksman and the mage. But if you see an enemy with a little blood, you can make it a priority first. Because, Assassins have high damage and can kill heroes easily. Why should you target Marksman ?.

                        Because, marksman is a hero who is considered Squisy, but is a source of damage that a team has. If you turn off the team’s source of damage, you can help the team to withstand attacks and make effective counterattacks. This also applies to mages, because mages are also a source of Magica’s damage, which you must keep silent. After that you can wait for another enemy for you to kill.
                    </p>
                    <br />

                    <div className='space-y-3'> <p>There should be 3 tips every Assassin user should know.</p>

                        <div className='space-y-3'>
                            <div className=''>
                                <h2 className=' font-mono font-semibold'>Must be good at farming</h2>
                                <p className='pl-5'>Assassin has great damage, be it on the hero, the tower or the jungle monster. Assassin can kill jungle monsters faster than any other role with simple attacks. So use this advantage to farm as much as possible and as quickly as possible so that your items get faster (but keep an eye on the tower and the friends who are in a hurry).

                                    While the assassin, who mostly stays in the tower, usually becomes a failed assassin or fails.</p>

                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Must be patient and thorough.</h2>
                                <p className='pl-5'>Have to be patient and careful, during the war, let fighters follow the tank open war. While your fighter, mage and MM are attacking the enemy, kidnap the enemy MM / mage / healer, kill them as soon as possible, they usually don’t realize because they are focused that they are in tanks / hunters. Use the hero lock feature to lock who your target is.

                                </p>
                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Sensitive to hostile conditions and roaming (exploring)</h2>
                                <p className='pl-5'>Assassin types often have to look at the map to see which enemies can be attacked, for example in top lane, the damage 2 vs help your friends above, try without knowing the enemy so they can use your skill combo difficult to avoid. If only one of them dies, demolishing the top tower will be easy as the situation changes to 3 versus 1.</p>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='py-6'>
                    <h2 className='text-center font-mono font-semibold'>List of Assassin Heroes</h2>{heroData.length !== 0 ? <ListOfCards object={heroData} type='hero' /> : <ListOfLoadingCards type='hero' />}</div>

            </div>
        </div>
    )
}

export default Assassin
