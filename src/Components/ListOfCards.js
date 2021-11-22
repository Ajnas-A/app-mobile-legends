import React from 'react'
import CardsV2 from './Cards'
import Cards from './Cards'
import ClassCards from './ClassCards'
import HeroCardV4 from './HeroCardV4'

function ListOfCards({ object, type }) {
    return (
        <div className='flex justify-center'>
            <div>
                {type === 'hero' ? <div className='grid backdrop-filter  sm:grid-cols-2 auto-cols-max place-items-center gap-8  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-10 container mx-auto '>
                    {
                        object.map((hero, key) => {
                            {/*<CardsV2 key={key} heros={hero} />*/ }
                            return <HeroCardV4 key={key} heros={hero} />
                        })
                    }
                </div> : <div className='grid grid-cols-1 gap-8   xl:grid-cols-2 pl-5 pr-5 p-10  container mx-auto'>
                    {object.map((e, key) => {
                        return <ClassCards image={e} />
                    })}
                </div>}
            </div>
        </div>
    )
}

export default ListOfCards
