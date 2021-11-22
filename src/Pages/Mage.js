import React, { useEffect, useState } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import ListOfCards from '../Components/ListOfCards'
import ListOfLoadingCards from '../Components/ListOfLoadingCards'

function Mage() {
    const collectionRef = query(collection(db, 'Heroes'), where('roles', 'array-contains', 'Mage'))
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
                    <h1 className='text-center text-2xl font-mono font-extrabold'>MAGE</h1>
                    <p>A Mage, is a magic damage dealer and an important role in any team composition. Their strengths are in their abilities and not usually their basic attacks. They, however, tend to be squishy and are a priority target in team fights due to their burst damage and crowd control abilities. While the mages’ role across genres may differ, their core characteristic remains the same: Deal burst damage.</p>
                    <br />
                    <p>Mages deal early game damage and create early pressure onto enemy heroes. They do not scale as well with items compared to marksmen, long range Physical Damage carries who rely on a combination of primarily auto attacks and skills.

                        This means that mages’ damage does not increase exponentially the longer the game goes on. The moment you complete all equipment, that is the maximum burst you’ll be able to produce. You peak at the early to mid game, and prefer mid as your go-to lane.

                        Compared to other lanes, mid lane runs straight down, and therefore is the shortest distance wise. Since mages do not have high health, and some even low mobility, it is safer for mages to stay mid, as you’ll be able to retreat to turret range conveniently.

                        When it comes to target selection, your primary goal is to burst down the enemy marksmen because they pose the greatest threat to your team. If they move out of position in a team fight, especially in the late game, it’s your job to catch them with your spells.

                        Most mages possess crowd control, so don’t hesitate to use your crowd control spell when you see an opportunity to. It could lock up enemies and catch them out of position, allowing your team to collapse on them.

                        As you’re going to rely on your marksmen to carry later in the game, you also have the option of peeling for them like a support. Enemy heroes will likely jump onto your marksman in fights, and you have the ability to displace, slow, stun, knock them up and so on. Your damage here won’t nuke them, but rather, ensure your marksman survives as you lower enemy health bars as much as possible.
                    </p>
                    <br />

                    <div className='space-y-3'> <p>There should be 3 key tips every Mage user should know.</p>

                        <div className='space-y-3'>
                            <div className=''>
                                <h2 className=' font-mono font-semibold'>Must keep a good distance</h2>
                                <p className='pl-5'>There is no much difference between playing mage or marksman. Positioning is a key of succses. If you are not Alice or Esme, never go infront of your team. Always position yourself behind tank and just aim for damage dealers. Playing mage is not easy at all. On the contrary , you will need some time to master most of good mages. Any missed skill will put you in trouble and you will look like a clown and your team mates will lose faith in you. If you don't feel you can go for mage in specific game, just don't go for it because mage is important for team in a same way as tank.</p>

                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Midlane</h2>
                                <p className='pl-5'>Many players don't understand how important midlane tower is. When you destroy or lose midlane tower, map is widely open. Always clean your lane before doing anything else. If you see opportunity to push and destroy enemies midlane tower - don't hesitate, go for it.</p>
                            </div>
                            <div>
                                <h2 className=' font-mono font-semibold'>Ganking</h2>
                                <p className='pl-5'> Task as mage is not to sit at midlane and do nothing. First of all, you need to protect your jungler while he is taking buff. That doesn't mean you necessary need to stay near blue or red buff. Move around, check bushes, poke enemies midlaner and HELP your jungler to secure Litho. For cleaning lane, you need few seconds, so try to help your jungler around mid as much as you can. When you reach lvl 4 you start ganking top or bottom lane. This is a time where your map awernes comes to the fore. This is only about YOU. Mages need to have really good map awernes and know how to assess the situation. If you are a 5-man team or you have good team who will play normal 1-3-1 situation, than you you go with your core and tank, literaly they will lead you where to go. Just don't be inactive! That's a biggest mistake mage players are doing. As for ganking, always try to suprise enemies from bush. Perfect time is 70% of ganking.</p>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='py-6'>
                    <h2 className='text-center font-mono font-semibold'>List of Mage Heroes</h2>{heroData.length !== 0 ? <ListOfCards object={heroData} type='hero' /> : <ListOfLoadingCards type='hero' />}</div>

            </div>
        </div>
    )
}

export default Mage
