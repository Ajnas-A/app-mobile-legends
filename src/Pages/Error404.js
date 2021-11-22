import React from 'react'
import { useHistory } from 'react-router'

function Error404() {
    const history = useHistory()
    return (
        <div className='h-screen'>
            <div className='container mx-auto h-full'>
                <div className='flex flex-col justify-start items-center  h-full  p-2 space-y-16'>
                    <h2 className=' p-5 font-mono font-extrabold text-6xl' >Oops..404 Page Not Found.</h2>
                    <div className='flex  '>
                        <img src="https://cdn-icons.flaticon.com/png/512/3929/premium/3929697.png?token=exp=1636386850~hmac=fa4c12e7af125d06cd4c509fa2642556" alt="" />
                        <div className='flex flex-col items-center justify-center space-y-10 p-4 py-8 '>
                            <h2 className='shadow-lg bg-opacity-10  text-green-800 p-10 rounded-sm cursor-pointer hover:bg-green-500 hover:text-green-200 transition ease-in duration-200' onClick={() => history.push('/')}>Continue to HomePage</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404
