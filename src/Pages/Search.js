import React, { useState, useContext, useEffect } from 'react'
import { heroContext } from '../Context'
import { db } from '../firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'
import LoadingCard from '../Components/LoadingCard'
import SearchComponentV2 from '../Components/SearchComponentV2'
import ListOfLoadingCards from '../Components/ListOfLoadingCards'



function Search() {

    const keyWordContext = useContext(heroContext)

    const [isFilter, setIsFilter] = useState(true)
    const [filterName, setFilterName] = useState('All')
    const [heroDetails, setHeroDetails] = useState([])
    const [roleName, setRoleName] = useState('')
    const [checked, setChecked] = useState([false, false, false, false, false, false])
    const [checkedAll, setCheckedAll] = useState(false)

    const collectionRef = collection(db, 'Heroes')

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collectionRef)
            setHeroDetails(data.docs.map((e, key) => { return { ...e.data(), id: e.id } }))
        }
        getData()
    }, [])

    const checkFalse = () => {
        let countFalse = 0
        checked.map((e) => {
            if (e === false) {
                countFalse++
            }
        })
        if (countFalse === checked.length) {
            setCheckedAll(false)
        }
        else {
            setCheckedAll(true)
        }
    }

    useEffect(() => {
        checkFalse()
    }, [checked])


    useEffect(() => {
        if (checkedAll === false) {
            setRoleName('')
        }
    }, [checkedAll])

    useEffect(() => {
        setChecked([false, false, false, false, false, false])
        setRoleName('')

    }, [filterName])

    return (
        <div>
            <div className='h-full'>
                <div className='container mx-auto w-full p-2 ' >
                    <div >
                        <div>
                            <div className=' w-full p-4 h-36 sm:h-32 border-b-4 border-green-600 border-opacity-50 mb-10 '>
                                <div className='flex shadow-3xl w-full h-16 justify-start'>
                                    <input name="Enter" id="" placeholder=' Keyword Here...' value={keyWordContext.keyWord} className='w-full p-3 focus:bg-green-500 focus:bg-opacity-60 focus:placeholder-black placeholder-white focus:outline-none bg-green-100 bg-opacity-20 ' onChange={(e) => {
                                        keyWordContext.setKeyWord(e.target.value)
                                    }} />
                                    <div className='w-40 h-full  bg-green-200  bg-opacity-90 text-center  hover:bg-green-500 hover:bg-opacity-80  '>
                                        <div className='flex z-40 justify-end items-center space-x-2 p-2 w-full h-full cursor-pointer' onClick={() => {
                                            setIsFilter(!isFilter)
                                        }}>
                                            <button className=' h-full w-full' >Filter : {filterName}</button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                        <div className={`${isFilter ? 'hidden' : ''} bg-green-200 text-center   bg-opacity-100 z-40`}>
                                            <h1 className='hover:bg-green-500 hover:bg-opacity-80 cursor-pointer  transition duration-300 h-full ease-in  p-1' onClick={() => {
                                                setIsFilter(!isFilter)
                                                setFilterName('All')
                                            }
                                            }>All</h1>
                                            <h1 className='hover:bg-green-500 hover:bg-opacity-80 cursor-pointer  transition duration-300 h-full ease-in p-1' onClick={() => {
                                                setIsFilter(!isFilter)
                                                setFilterName('Heroes')
                                            }
                                            }>Heroes</h1>
                                            <h1 className='hover:bg-green-500 hover:bg-opacity-80 cursor-pointer  transition duration-300 h-full ease-in  p-1' onClick={() => {
                                                setIsFilter(!isFilter)
                                                setFilterName('Items')
                                            }
                                            }>Items</h1>
                                            <h1 className='hover:bg-green-500 hover:bg-opacity-80 cursor-pointer  transition duration-300 h-full ease-in  p-1' onClick={() => {
                                                setIsFilter(!isFilter)
                                                setFilterName('Roles')
                                            }
                                            }>Roles</h1>
                                        </div>
                                    </div>

                                </div>


                                {filterName === 'Roles' &&
                                    <div className='flex z-10 space-x-3 sm:space-x-5 justify-center items-center p-1 mt-3 sm:mt-2'>
                                        <div className='space-x-1 flex flex-col  items-center sm:flex-row justify-center '  ><input type="checkbox" checked={checked[0]} name="" id="" onClick={() => {

                                            setRoleName('tank')
                                            setChecked([!checked[0], false, false, false, false, false])

                                        }

                                        } /><span>Tanks</span></div>
                                        <div className='space-x-1 flex flex-col  items-center sm:flex-row justify-center' ><input type="checkbox" checked={checked[1]} name="" id="" onClick={() => {

                                            setRoleName('assassin')
                                            setChecked([false, !checked[1], false, false, false, false])

                                        }

                                        } /><span>Assassin</span></div>
                                        <div className='space-x-1 flex flex-col  items-center sm:flex-row justify-center'><input type="checkbox" checked={checked[2]} name="" id="" onClick={() => {

                                            setRoleName('mage')
                                            setChecked([false, false, !checked[2], false, false, false])

                                        }

                                        } /><span>Mage</span></div>
                                        <div className='space-x-1 flex flex-col  items-center sm:flex-row justify-center'><input type="checkbox" checked={checked[3]} name="" id="" onClick={() => {

                                            setRoleName('marksman')
                                            setChecked([false, false, false, !checked[3], false, false])

                                        }

                                        } /><span>Marksman</span></div>
                                        <div className='space-x-1 flex flex-col  items-center sm:flex-row justify-center'><input type="checkbox" checked={checked[4]} name="" id="" onClick={() => {

                                            setRoleName('fighter')
                                            setChecked([false, false, false, false, !checked[4], false])

                                        }

                                        } /><span>Fighter</span></div>
                                        <div className='space-x-1 flex flex-col  items-center sm:flex-row justify-center'><input type="checkbox" checked={checked[5]} name="" id="" onClick={() => {

                                            setRoleName('support')
                                            setChecked([false, false, false, false, false, !checked[5]])

                                        }

                                        } /><span>Support</span></div>
                                    </div>}
                            </div>

                        </div>
                        {heroDetails.length !== 0 ? <div>

                            <SearchComponentV2 filter={filterName} keyword={keyWordContext.keyWord} heroDetails={heroDetails} roleName={roleName} set={setRoleName} />
                        </div> : <div className='h-auto '>
                            <ListOfLoadingCards type='hero' />
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search

