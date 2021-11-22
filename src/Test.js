import React, { useEffect } from 'react'
import { db } from './firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import heroDetails, { hero } from './data'


function Test() {

    const collectionRef = collection(db, "Heroes")

    const addInfo = async () => {

        heroDetails.map((e) => {
            addDoc(collectionRef, e)
        })

    }

    useEffect(() => {

        const getData = async () => {
            const data = await getDocs(collectionRef)
            data.docs.map((e) => {
                console.log(e.data());
            })
            console.log(hero);
        }
        getData()


    }, [])



    return (
        <div>
            <h1>Hello</h1>
            <button onClick={addInfo}>Add Hero details</button>
        </div>
    )
}




export default Test
