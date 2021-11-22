import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import logo from '../ml.svg'
import { heroContext } from '../Context'

function NavBarV2() {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [search, setSearch] = useState('')
    const keyContext = useContext(heroContext)
    const history = useHistory()

    const handleSearch = () => {
        keyContext.setKeyWord(search)
        history.push('/search')
        setSearch('')
    }

    const changeMobile = () => {
        setMobileMenu(!mobileMenu)
    }


    return (
        <div className=''>
            <div className=' bg-green-100 bg-opacity-100  sm:bg-opacity-80  fixed w-full z-50 inset-x-0 top-0 h-16 sm:backdrop-blur sm:backdrop-filter'>
                {/*backdrop-blur backdrop-filter*/}
                <div className='px-5  md:px-20 mx-auto h-16 '>
                    <div className=' h-full flex justify-between items-center  '>
                        <div className='flex space-x-4 items-center'>
                            <div className='flex  items-center px-2 py-4  space-x-2'>
                                <img src={logo} alt="logo" className='h-full w-20 cursor-pointer' onClick={() => { history.push('/') }} />
                            </div>
                            <div className='hidden md:flex items-center text-md'>
                                <h1 className=' px-2 py-5 text-gray-500 hover:text-gray-900 cursor-pointer' href='#' onClick={() => {
                                    history.push('/heroes')
                                }}>Heroes</h1>
                                <h1 className='px-2 py-5 text-gray-500 hover:text-gray-900 cursor-not-allowed'>Items</h1>
                                <h1 className='px-2 py-5 text-gray-500 hover:text-gray-900 cursor-pointer' onClick={() => { history.push('/class') }}>Categories</h1>
                                <h1 className='px-2 py-5 text-gray-500 hover:text-gray-900 cursor-pointer' onClick={() => { history.push('/add') }}>Add Hero</h1>
                            </div>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <div className='flex md:flex items-center space-x-1 '>
                                <div className=''><input placeholder='Search here...' value={search} onChange={(e) => { setSearch(e.target.value) }} className='leading-8 w-20 md:w-full focus:outline-none px-2 bg-gray-300 bg-opacity-80  rounded' type="text" /></div>
                                <div onClick={() => { handleSearch() }} className='  py-1 px-3 bg-yellow-400 text-yellow-900 rounded shadow-md hover:bg-yellow-300 transition duration-300 cursor-pointer '>Search</div>
                            </div>
                            <div className='flex cursor-pointer md:hidden'>
                                <svg onClick={() => {
                                    setMobileMenu(!mobileMenu)
                                }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg></div>
                        </div>
                    </div>
                </div>
                {mobileMenu && <div className='bg-green-100 bg-opacity-90 w-full h-screen  md:hidden'>
                    <div className='flex flex-col justify-start space-y-5 h-full items-center'>
                        <h1 className='px-2 py-2 text-gray-600 hover:text-gray-900 cursor-pointer' onClick={() => {
                            history.push('/heroes')
                            changeMobile()
                        }}>Heroes</h1>
                        <h1 className='px-2 py-2 text-gray-600 hover:text-gray-900 cursor-not-allowed'>Items</h1>
                        <h1 className='px-2 py-2 text-gray-600 hover:text-gray-900 cursor-pointer' onClick={() => {
                            history.push('/class')
                            changeMobile()
                        }}>Categories</h1>
                        <h1 className='px-2 py-2 text-gray-600 hover:text-gray-900 cursor-pointer' onClick={() => {
                            history.push('/add')
                            changeMobile()
                        }}>Add Hero</h1>
                        <h1 className='px-2 py-2 text-gray-600 hover:text-gray-900 cursor-pointer' onClick={() => {
                            history.push('/search')
                            changeMobile()
                        }}>Search</h1>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default NavBarV2


