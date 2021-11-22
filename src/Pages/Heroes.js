import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import ListOfCards from '../Components/ListOfCards'
import ListOfLoadingCards from '../Components/ListOfLoadingCards'


function Heroes() {


    const history = useHistory()
    const [heroData, setHeroData] = useState([])
    const collectionRef = collection(db, 'Heroes')

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collectionRef)
            setHeroData(data.docs.map((e) => { return { ...e.data(), id: e.id } }))
        }
        getData()

    }, [])

    return (
        <div className='p-10 '>
            <div className='container mx-auto' >
                <h1 className='text-center font-mono text-2xl font-extrabold mb-5'>Legends/Heroes</h1>

                <div className='space-y-5'>
                    <div>
                        <p>The heroes are playable characters who will fight to the death in Mobile Legends: Bang Bang</p>
                        <p>These heroes are divided into 5 categories, Tank, Fighter, Assassin, Mage, Marksman, and Support.</p>
                    </div>
                    <div className=' space-y-3'>
                        <div> <h1 className=' font-mono text-xl font-extrabold'>How to Unlock Mobile Legends Heroes</h1>
                            <p>Moonton offers a wide range of options for players to play the heroes they wanted. Here are the ways that players can obtain ML characters in the game.</p></div>

                        <div className='ml-5 space-y-4'> <div>

                            <h2 className=' font-mono text-lg font-extrabold'>Weekly Free Heroes</h2>
                            <p>Every week, Moonton offers a wide variety of heroes that players can use during regular matches. However, the free weekly hero pool can’t be accessed in ranked games.</p>
                        </div>
                            <div>
                                <h2 className=' font-mono text-lg font-extrabold'>Starlight Free Heroes</h2>
                                <p>If players purchased the Starlight Membership, they will also be able to play a wide range of ML heroes for free. These heroes change every week similar to the weekly free heroes. As a bonus, you can use these free heroes on ranked games.</p>
                            </div>
                            <div>
                                <h2 className=' font-mono text-lg font-extrabold'>Purchasing ML Heroes in the Shop</h2>
                                <p>Players can unlock a hero permanently through the in-game shop. Heroes can be purchased using Battle Points, Hero Fragments, Tickets, or Diamonds. Some several promotions or bundles allow players to unlock a hero at a cheaper price.

                                    There are ML characters that can’t be purchased using Battle Points. Freya can only be purchased by topping up a certain amount of Diamonds. Oddete can be unlocked through various events like the jigsaw event or the Lucky Shop</p>
                            </div></div>

                    </div>
                    <div className='space-y-4'>
                        <p>There are different classes for the Heroes they are</p>
                        <div className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-around items-center sm:space-x-4'>

                            <div className='flex sm:flex-row space-x-4 justify-around items-center w-full'>
                                <div className=''><button onClick={() => {
                                    history.push('/tank')
                                }} className='shadow-xl bg-green-500 bg-opacity-30 p-2  hover:bg-green-400 transition duration-300  rounded-2xl w-24 '>Tanks</button></div>
                                <div><button className='shadow-xl bg-green-500 bg-opacity-30 p-2 rounded-2xl w-24 hover:bg-green-400 transition duration-300' onClick={() => {
                                    history.push('/mage')
                                }}>Mage</button></div>
                                <div><button className='shadow-xl bg-green-500 bg-opacity-30 p-2 rounded-2xl w-24 hover:bg-green-400 transition duration-300' onClick={() => {
                                    history.push('/assassin')
                                }}>Assassin</button></div>
                            </div>

                            <div className='flex sm:flex-row space-x-4 justify-around items-center w-full '> <div><button className='shadow-xl bg-green-500 bg-opacity-30 p-2 rounded-2xl w-24 hover:bg-green-400 transition duration-300' onClick={() => {
                                history.push('/fighter')
                            }}>Fighter</button></div>
                                <div><button className='shadow-xl bg-green-500 bg-opacity-30 p-2 rounded-2xl w-24 hover:bg-green-400 transition duration-300' onClick={() => {
                                    history.push('/marksman')
                                }}>Marksman</button></div>
                                <div><button className='shadow-xl bg-green-500 bg-opacity-30 p-2 rounded-2xl w-24 hover:bg-green-400 transition duration-300' onClick={() => {
                                    history.push('/support')
                                }}>Support</button></div></div>


                        </div>
                        <div> <p>To learn more about different classes head to Categories Page.</p>
                            <button onClick={() => history.push('/class')} className='shadow-xl bg-green-500 bg-opacity-30 p-2 rounded-sm hover:bg-green-400 transition duration-300'>Categories</button></div>

                    </div>
                </div>


                <div></div>
                {heroData.length !== 0 ? <ListOfCards object={heroData} type='hero' /> : <ListOfLoadingCards type='hero' />}
            </div>
        </div>
    )
}

export default Heroes