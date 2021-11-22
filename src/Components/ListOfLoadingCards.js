import React from 'react'
import LoadingCard from './LoadingCard'
import LoadingClassCards from './LoadingClassCards'

function ListOfLoadingCards({ type }) {
    return (
        <div className='flex justify-center'>
            {type === 'hero' ? <div className='h-auto' >
                <div className='grid backdrop-filter  sm:grid-cols-2 auto-cols-max place-items-center gap-8  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-10 container mx-auto'>
                    {/* 
               grid backdrop-filter  grid-cols-1 auto-cols-max place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 z-30*/}
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />

                </div>
            </div> : <div className='h-auto grid grid-cols-1 gap-8   xl:grid-cols-2 pl-5 pr-5 p-10  container mx-auto'>
                <LoadingClassCards />
                <LoadingClassCards />
                <LoadingClassCards />
                <LoadingClassCards />
                <LoadingClassCards />
                <LoadingClassCards />
            </div>}
        </div>
    )
}

export default ListOfLoadingCards
