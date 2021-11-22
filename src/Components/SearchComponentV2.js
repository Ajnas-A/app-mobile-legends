import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import HeroCardV4 from './HeroCardV4'
import ListOfCards from './ListOfCards'
import ListOfLoadingCards from './ListOfLoadingCards'

function SearchComponentV2({ filter, keyword, heroDetails, set, roleName }) {

    const [finalArray, setFinalArray] = useState([])



    useEffect(() => {

        let resultArray = []
        if (keyword === '') {
            heroDetails.map((e, key) => {
                resultArray.push(e)
                return 0
            })
        }
        setFinalArray(resultArray)
    }, [])

    const handleSearch = () => {
        let resultArray = []
        if (filter.toLowerCase() === 'nav' | filter.toLowerCase() === 'all') {
            heroDetails.map((e, key) => {

                if (e.name.toLowerCase().startsWith(keyword.toLowerCase())) {
                    resultArray.push(e)
                }
                return 0
            })
        } else if (filter.toLocaleLowerCase() === 'heroes') {
            heroDetails.map((e, key) => {
                if (e.name.toLowerCase().startsWith(keyword.toLowerCase())) {
                    resultArray.push(e)
                }
                return 0
            })
        } else if (filter.toLowerCase() === 'roles') {
            heroDetails.map((e, key) => {
                let count = 0

                if (roleName === '') {
                    resultArray.push(e)
                }
                else {
                    e.roles.map((role, key) => {
                        if (role.toLocaleLowerCase() === roleName.toLocaleLowerCase()) {
                            count++
                        }
                        return 0
                    })
                    if (count !== 0) {
                        if (e.name.toLowerCase().startsWith(keyword.toLowerCase())) {
                            resultArray.push(e)


                        }
                    }
                }


                return 0
            })
        }
        setFinalArray(resultArray)
    }

    useEffect(() => {
        handleSearch()
    }, [filter, keyword, roleName])

    return (
        <div className='h-full'>
            <h1>Results ({finalArray.length})</h1>
            {
                finalArray.length !== 0 ? <ListOfCards object={finalArray} type='hero' /> : <div className='h-screen'>Not Found</div>
            }

            {/*<div className=' grid backdrop-filter  grid-cols-1 auto-cols-max place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 z-30'>
                {
                    finalArray.length !== 0 ?
                        finalArray.map((e, key) => { return <HeroCardV4 heros={e} /> })
                        : <div className='h-screen'>Not Found</div>
                }
            </div>*/}
        </div>
    )
}

export default SearchComponentV2
