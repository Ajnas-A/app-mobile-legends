import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebaseConfig'
import ListOfLoadingCards from '../Components/ListOfLoadingCards'
import ListOfCards from '../Components/ListOfCards'

function Class() {

    const collectionRef = collection(db, 'Categories')
    const [heroDetails, setHeroDetails] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collectionRef)
            setHeroDetails(data.docs.map((e) => { return { ...e.data(), id: e.id } }))
        }
        getData()
    }, [])

    // const storageRef = ref(storage, `/images/Clint_witch_hunter.jpg`)
    // getDownloadURL(storageRef).then((e) => console.log(e))

    return (
        <div className='p-4 space-y-4 '>
            <div>
                <h1 className='text-center font-mono font-extrabold text-xl '>There are different classes for legends in Mobile Legends</h1>
                {heroDetails.length !== 0 ? <ListOfCards object={heroDetails} type='class' /> : <ListOfLoadingCards type='class' />}
            </div>

        </div>
    )
}

export default Class
