import React from 'react'
import CardsV2 from './CardsV2'
import Cards from './Cards'
import ClassCards from './ClassCards'
import HeroCardV4 from './HeroCardV4'

function ListOfCardsV2({ object, type }) {
    return (
        <div>
            {/*type === 'hero' ? <div className='grid sm:backdrop-filter grid-cols-1 auto-cols-max place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 container mx-auto '>
                {
                    object.map((hero, key) => {
                        return <HeroCardV4 key={key} heros={hero} />
                    })
                }
            </div> : <div className='grid grid-cols-1 gap-8   xl:grid-cols-2 pl-5 pr-5 p-10  container mx-auto'>
                {object.map((e, key) => {
                    return <ClassCards image={e} />
                })}
            </div>*/}
        </div>
    )
}

export default ListOfCardsV2
