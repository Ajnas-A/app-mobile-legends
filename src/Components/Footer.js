import React from 'react'


function Footer() {
    return (
        <div className='bg-green-200 w-full h-full '>
            <div className='container mx-auto  px-6 py-5 space-y-4'>
                <div className='flex flex-col md:flex-row  justify-between md:space-x-4'>
                    <div className='w-full p-2 space-y-4 border-green-400 md:border-r-4 border-b-4 md:border-b-0 font-Gidole'>
                        <h1 className='font-mono font-bold text-lg' >About Us</h1>
                        <div className='space-y-2'>
                            <h2>A website aimed at presenting some details on the popular mobile MOBA Mobile Legends</h2>
                            <h2>This mainly contains informations on the general gameplay and different heroes and their abilities</h2>
                        </div>
                    </div>
                    <div className='w-full p-2 space-y-4 border-green-400 md:border-r-4 border-b-4 md:border-b-0'>
                        <h1 className='font-mono font-bold text-lg' >Credits</h1>
                        <div className='space-y-2'>
                            <div className='flex space-x-2 items-center'>
                                <h2 className='font-Gidole'>Images :</h2>
                                <div className='  items-center space-x-2 hover:bg-green-300  transition duration-200 px-2 py-1 rounded-sm'>
                                    <a href="https://www.deviantart.com/fachrifhr/gallery" target="_blank" rel="noopener noreferrer" > <div className='flex space-x-2 items-center' > <img className='h-6 w-6' src="https://a.deviantart.net/avatars-big/f/a/fachrifhr.jpg?8" alt="#" />
                                        <h2 className='font-Gidole'>FachriFHR</h2></div></a>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='font-Gidole'>Download the game from the App Stores.</h2>
                                <div className='flex items-center justify-start'>
                                    <div>
                                        <a href='https://play.google.com/store/apps/details?id=com.mobile.legends&hl=en_IN&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank" rel="noopener noreferrer"><img className='h-16' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>

                                    </div>
                                    <a href="https://apps.apple.com/us/app/mobile-legends-bang-bang/id1160056295?itsct=apps_box_badge&amp;itscg=30200" target="_blank" rel="noopener noreferrer"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1478908800&h=e95c403339e588f8d503c74ed3654397" alt="Download on the App Store" /></a>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-mono font-bold text-lg'>Powered By</h1>
                                <div className='flex items-center space-x-2'>
                                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/office/48/000000/react.png" alt='#' /></a>
                                    <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><img className='' src="https://img.icons8.com/color/48/000000/firebase.png" alt='#' />
                                    </a>
                                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">  <img className='h-8' src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" alt="#" /></a>
                                </div>
                            </div>
                            <div className='text-xs font-Gidole'><a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons by Icons8</a></div>
                        </div>
                    </div>
                    <div className='w-full p-2 space-y-4'>
                        <h1 className='font-mono font-bold text-lg'>Follow Me</h1>
                        <div className='space-y-2'>
                            <div className='w-20'><a href="https://www.linkedin.com/in/ajnas-a-a-270bb1189/" target="_blank" rel="noopener noreferrer">
                                <div className='flex space-x-2 items-center group  '>
                                    <img className='h-8 w-8 group-hover:scale-125 transform transition duration-300' src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt='#' />
                                    <h2 className='text-black group-hover:text-green-800 font-Gidole'>Ajnas</h2>

                                </div>
                            </a>
                            </div>
                            <div className='w-20'>
                                <a href="https://github.com/Ajnas-A" target="_blank" rel="noopener noreferrer" >
                                    <div className='flex space-x-2 items-center  group '>
                                        <img className='h-8 w-8 group-hover:scale-125 transform transition duration-300' src="https://img.icons8.com/fluency/48/000000/github.png" alt='#' />
                                        <h2 className='text-black group-hover:text-green-800 font-Gidole'>Ajnas</h2>
                                    </div>
                                </a>
                            </div>

                            <div className='w-20'>
                                <a href="https://twitter.com/Ajnas_7" target="_blank" rel="noopener noreferrer" >
                                    <div className='flex space-x-2 items-center  group '>
                                        <img className='h-8 w-8 group-hover:scale-125 transform transition duration-300' src="https://img.icons8.com/fluency/48/000000/twitter.png" alt='#' />
                                        <h2 className='text-black group-hover:text-green-800 font-Gidole'>Ajnas</h2>
                                    </div></a>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <h2 className=' font-mono font-bold text-lg'> Send your Feedback </h2>
                            <div className='flex space-x-2 items-center'>
                                <img className='h-8 w-8' src="https://img.icons8.com/color/48/000000/gmail-new.png" alt='#' />
                                <h2 className='font-Gidole'>support@gmail.com</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='text-center font-Gidole'>© React Developer 2021</h2>
            </div>
        </div>
    )
}

export default Footer
