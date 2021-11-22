import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { db } from './../firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebaseConfig'

function AddDataV2() {
    const history = useHistory()
    const collectionRef = collection(db, 'Heroes')

    const handleFileUpload = async () => {
        const storageRef = ref(storage, `/images/${image ? image.name : ''}`)
        await uploadBytes(storageRef, image)
        await getDownloadURL(storageRef).then(e => {
            setUrl(e)
        })
    }

    const [enableSkillFour, setEnableSkillFour] = useState(false)
    const [mageRole, setMageRole] = useState(true)
    const [supportRole, setSupportRole] = useState(true)
    const [tankRole, setTankRole] = useState(true)
    const [assassinRole, setAssassinRole] = useState(true)
    const [marksmanRole, setMarksmanRole] = useState(true)
    const [fighterRole, setFighterRole] = useState(true)
    const [roles, setRoles] = useState([])
    const [heroInfo, setHeroInfo] = useState({})
    const [skills, setSkills] = useState({})
    const [passive, setPassive] = useState({})
    const [passiveType, setPassiveType] = useState([])
    const [skillOne, setSkillOne] = useState({})
    const [skillOneType, setSkillOneType] = useState([])
    const [skillTwo, setSkillTwo] = useState({})
    const [skillTwoType, setSkillTwoType] = useState([])
    const [skillThree, setSkillThree] = useState({})
    const [skillThreeType, setSkillThreeType] = useState([])
    const [skillFour, setSkillFour] = useState({})
    const [skillFourType, setSkillFourType] = useState([])
    const [price, setPrice] = useState({})
    const [inputData, setInputData] = useState([])
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState()
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setHeroInfo({ ...heroInfo, image: url })
    }, [url])

    useEffect(() => {
        setHeroInfo({ ...heroInfo, roles: roles, skills: skills, price: price })
    }, [roles, skills, price])

    useEffect(() => {
        setSkills({ ...skills, passive: passive, skillOne: skillOne, skillTwo: skillTwo, skillThree: skillThree, skillFour: skillFour })
    }, [passive, skillOne, skillTwo, skillThree, skillFour])

    useEffect(() => {
        setPassive({ ...passive, type: passiveType })
        setSkillOne({ ...skillOne, type: skillOneType })
        setSkillTwo({ ...skillTwo, type: skillTwoType })
        setSkillThree({ ...skillThree, type: skillThreeType })
        setSkillFour({ ...skillFour, type: skillFourType })
    }, [passiveType, skillOneType, skillTwoType, skillThreeType, skillFourType])

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collectionRef)
            setInputData(data.docs.map((e, key) => { return { ...e.data(), id: e.id } }))
        }
        getData()
    }, [])

    const addHeroData = async () => {
        addDoc(collectionRef, heroInfo)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let falseCounter = []
        falseCounter.push(typeValidation(passiveType.length))
        falseCounter.push(typeValidation(skillOneType.length))
        falseCounter.push(typeValidation(skillTwoType.length))
        falseCounter.push(typeValidation(skillThreeType.length))

        if (enableSkillFour === true) { falseCounter.push(typeValidation(skillFourType.length)) }

        falseCounter.push(typeValidation(roles.length))
        falseCounter.push(objectValidation(price))

        let heroValid = heroValidation(heroInfo)
        if (heroValid === 1) {
            falseCounter.push(typeValidation(heroInfo.name.length))
            falseCounter.push(typeValidation(heroInfo.desc.length))
        }
        else if (heroValid === 0) {
            falseCounter.push(1)
            falseCounter.push(1)
        }

        console.log(falseCounter);
        image ? falseCounter.push(0) : falseCounter.push(1)

        let finalCounter = 0
        falseCounter.forEach((e) => {
            if (e === 0) {
                finalCounter += 1
            }
        })

        let nameCount = 0
        inputData.map((e, key) => {
            if (e.name === heroInfo.name) {
                nameCount++
            }
            return 0
        })

        console.log(finalCounter, falseCounter.length);
        let finale = finalValidation(finalCounter, falseCounter.length)
        if (finale === 1 && nameCount === 0) {
            await handleFileUpload()
            alert('Image Uploaded Successfully')
            setSuccess(true)
        } else {
            alert('Error : Please fill all the fields/Name Already Exists')
        }
    }

    const finalSubmit = (e) => {
        e.preventDefault()
        if (success === true) {
            addHeroData().then(console.log(heroInfo)).then(history.push('/heroes'))
        }
        else {
            alert('Please Fill All fields')
        }
    }

    const typeValidation = (type) => {
        let counter = 0

        if (type === 0) {
            counter += 1
        }
        return counter
    }

    const finalValidation = (finalCounter, falseCounter) => {
        if (finalCounter === falseCounter) {
            return 1
        } else {
            return 0
        }
    }

    const objectValidation = (type) => {
        let counter = 0
        if (Object.keys(type).length === 0) {
            counter += 1
        }
        return counter
    }

    const heroValidation = (type) => {
        if (type.hasOwnProperty('name') === false | type.hasOwnProperty('desc') === false) {
            return (0)
        }
        else {
            return (1)
        }
    }


    return (
        <div className='h-full bg-gray-400 bg-opacity-0 md:p-10 container mx-auto'>
            <div className=' h-full p-2  bg-red-600 bg-opacity-0'>
                <div className='p-8 bg-green-600   rounded shadow-xl  bg-opacity-30'>
                    <div className='flex-col justify-start lg:flex lg:flex-row '>
                        <div className='flex-grow'>
                            <h1 className='text-center mb-10'>Add Details</h1>
                            <div>
                                {/*Form*/}
                                <form className='space-y-4 flex flex-col'>
                                    <div className='flex flex-col space-y-1'>
                                        <span className=''>Name :</span>
                                        <input className='bg-gray-200 bg-opacity-80 p-2' onChange={(e) => { setHeroInfo({ ...heroInfo, name: e.target.value }) }} type="text" />
                                    </div>
                                    <div className='flex flex-col space-y-1 w-full'>
                                        <span className=''>Roles :</span>
                                        <div className=' flex flex-col justify-start md:flex md:flex-row md:space-x-4 pb-1 w-full'>

                                            <div className='space-x-1'>
                                                <input onClick={(e) => {
                                                    setMageRole(!mageRole)
                                                    mageRole ?
                                                        setRoles([...roles, 'Mage']) : setRoles(roles.filter(e =>
                                                            !e.includes('Mage')
                                                        ))
                                                }} type="checkbox" name="mage" id="" /><span>Mage</span>
                                            </div>
                                            <div className='space-x-1 '>
                                                <input onClick={(e) => {
                                                    setTankRole(!tankRole)
                                                    tankRole ?
                                                        setRoles([...roles, 'Tank']) : setRoles(roles.filter(e =>
                                                            !e.includes('Tank')
                                                        ))
                                                }} type="checkbox" name="Tank" id="" /><span>Tank</span>
                                            </div>
                                            <div className='space-x-1'>
                                                <input onClick={(e) => {
                                                    setFighterRole(!fighterRole)
                                                    fighterRole ?
                                                        setRoles([...roles, 'Fighter']) : setRoles(roles.filter(e =>
                                                            !e.includes('Fighter')
                                                        ))
                                                }} type="checkbox" name="Assassin" id="" /><span>Fighter</span>
                                            </div>
                                            <div className='space-x-1'>
                                                <input onClick={(e) => {
                                                    setAssassinRole(!assassinRole)
                                                    assassinRole ?
                                                        setRoles([...roles, 'Assassin']) : setRoles(roles.filter(e =>
                                                            !e.includes('Assassin')
                                                        ))
                                                }} type="checkbox" name="Marksman" id="" /><span>Assassin</span>
                                            </div>
                                            <div className='space-x-1'>
                                                <input onClick={(e) => {
                                                    setMarksmanRole(!marksmanRole)
                                                    marksmanRole ?
                                                        setRoles([...roles, 'Marksman']) : setRoles(roles.filter(e =>
                                                            !e.includes('Marksman')
                                                        ))
                                                }} type="checkbox" name="Fighter" id="" /><span>Marksman</span>
                                            </div>
                                            <div className='space-x-1'>
                                                <input onClick={(e) => {
                                                    setSupportRole(!supportRole)
                                                    supportRole ?
                                                        setRoles([...roles, 'Support']) : setRoles(roles.filter(e =>
                                                            !e.includes('Support')
                                                        ))
                                                }} type="checkbox" name="support" id="" /><span>Support</span>
                                            </div>
                                        </div>
                                        <input type="text" value={roles} disabled />
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                        <span className=''>Description :</span>
                                        <textarea onChange={(e) => { setHeroInfo({ ...heroInfo, desc: e.target.value }) }} className='h-44 bg-gray-200 bg-opacity-80 p-2' type="text" />
                                    </div>

                                    <div className='flex flex-col space-y-1'>
                                        <span className=''>Skills :</span>
                                        <div className='flex flex-col'>
                                            <span>Passive</span>
                                            <div className='flex space-x-3 justify-start h-10'>
                                                <div className='w-1/2 items-center flex space-x-2 h-10'>
                                                    <span className='mr-10'>Name</span>
                                                    <input onChange={(e) => {
                                                        setPassive({ ...passive, name: e.target.value })
                                                    }} className=' w-1/2 flex-grow h-7 bg-gray-200 bg-opacity-80 p-2' type="text" />
                                                </div>
                                                <div className='flex items-center w-1/2 space-x-2'>
                                                    <span >Type</span>
                                                    <input onChange={(e) => {
                                                        let arr = []
                                                        arr = e.target.value.split(',')
                                                        setPassiveType(arr)
                                                    }} className='w-full h-7 bg-gray-200 bg-opacity-80 p-2' type="text" placeholder={`Place ',' between different types...`} />
                                                </div>
                                            </div>
                                            <div className='flex items-center space-y-2 space-x-2'>
                                                <span>Description</span>
                                                <textarea onChange={(e) => {
                                                    setPassive({ ...passive, desc: e.target.value })
                                                }} className='flex-grow bg-gray-200 bg-opacity-80 p-2' type="text" />
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span>Skill One</span>
                                            <div className='flex space-x-3 justify-start h-10'>
                                                <div className='w-1/2 items-center flex space-x-2 h-10'>
                                                    <span className='mr-10'>Name</span>
                                                    <input onChange={(e) => {
                                                        setSkillOne({ ...skillOne, name: e.target.value })
                                                    }} className='w-1/2 flex-grow h-7 bg-gray-200 bg-opacity-80' type="text" />
                                                </div>
                                                <div className='flex items-center w-1/2 space-x-2'>
                                                    <span>Type</span>
                                                    <input onChange={(e) => {
                                                        let arr = []
                                                        arr = e.target.value.split(',')
                                                        setSkillOneType(arr)
                                                    }} className='w-1/2 flex-grow h-7 bg-gray-200 bg-opacity-80' type="text" />
                                                </div>
                                            </div>
                                            <div className='flex items-center space-y-2 space-x-2'>
                                                <span>Description</span>
                                                <textarea onChange={(e) => {
                                                    setSkillOne({ ...skillOne, desc: e.target.value })
                                                }} className='flex-grow bg-gray-200 bg-opacity-80' type="text" />
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span>Skill Two</span>
                                            <div className='flex w-full space-x-3 justify-start h-10'>
                                                <div className=' items-center flex  space-x-2 h-10 w-1/2 '>
                                                    <span className='mr-10'>Name</span>
                                                    <input onChange={(e) => {
                                                        setSkillTwo({ ...skillTwo, name: e.target.value })
                                                    }} className='w-1/2 flex-grow h-7 bg-gray-200 bg-opacity-80' type="text" />
                                                </div>
                                                <div className='flex items-center w-1/2 space-x-2'>
                                                    <span>Type</span>
                                                    <input onChange={(e) => {
                                                        let arr = []
                                                        arr = e.target.value.split(',')
                                                        setSkillTwoType(arr)
                                                    }} className='w-1/2 flex-grow h-7 bg-gray-200 bg-opacity-80' type="text" />
                                                </div>
                                            </div>
                                            <div className='flex items-center space-y-2 space-x-2'>
                                                <span>Description</span>
                                                <textarea onChange={(e) => {
                                                    setSkillTwo({ ...skillTwo, desc: e.target.value })
                                                }} className='flex-grow bg-gray-200 bg-opacity-80' type="text" />
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span>Skill Three</span>
                                            <div className='flex space-x-3 justify-start h-10'>
                                                <div className='w-1/2 items-center flex space-x-2 h-10'>
                                                    <span className='mr-10'>Name</span>
                                                    <input onChange={(e) => {
                                                        setSkillThree({ ...skillThree, name: e.target.value })
                                                    }} className='w-1/2 flex-grow h-7 bg-gray-200 bg-opacity-80' type="text" />
                                                </div>
                                                <div className='flex items-center w-1/2 space-x-2'>
                                                    <span>Type</span>
                                                    <input onChange={(e) => {
                                                        let arr = []
                                                        arr = e.target.value.split(',')
                                                        setSkillThreeType(arr)
                                                    }} className='w-1/2 flex-grow h-7 bg-gray-200 bg-opacity-80' type="text" />
                                                </div>
                                            </div>
                                            <div className='flex items-center space-y-2 space-x-2'>
                                                <span>Description</span>
                                                <textarea onChange={(e) => {
                                                    setSkillThree({ ...skillThree, desc: e.target.value })
                                                }} className='flex-grow bg-gray-200 bg-opacity-80' type="text" />
                                            </div>
                                        </div>
                                        <div className='space-x-3'>
                                            <label >Enable Skill Four: </label>
                                            <input className='' onClick={() => { setEnableSkillFour(!enableSkillFour) }} type="checkbox" name="" id="check" />
                                        </div>
                                        {enableSkillFour &&
                                            <div className='flex flex-col'>
                                                <span>Skill Four</span>
                                                <div className='flex space-x-3 justify-start h-10'>
                                                    <div className='w-1/2 items-center flex space-x-2 h-10'>
                                                        <span className='mr-10'>Name</span>
                                                        <input onChange={(e) => {
                                                            setSkillFour({ ...skillFour, name: e.target.value })
                                                        }} className='w-1/2 flex-grow h-7 bg-gray-200 bg-opacity-80' type="text" />
                                                    </div>
                                                    <div className='flex items-center w-1/2 space-x-2'>
                                                        <span>Type</span>
                                                        <input onChange={(e) => {
                                                            let arr = []
                                                            arr = e.target.value.split(',')
                                                            setSkillFourType(arr)
                                                        }} className='w-1/2 flex-grow h-7 bg-gray-200 bg-opacity-80' type="text" />
                                                    </div>
                                                </div>
                                                <div className='flex items-center space-y-2 space-x-2'>
                                                    <span>Description</span>
                                                    <textarea onChange={(e) => {
                                                        setSkillFour({ ...skillFour, desc: e.target.value })
                                                    }} className='flex-grow bg-gray-200 bg-opacity-80' type="text" />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                        <span className=''>Price</span>
                                        <span>Diamonds</span>
                                        <input onChange={(e) => {
                                            setPrice({ ...price, diamonds: e.target.value })
                                        }} type="text" className='bg-gray-200 bg-opacity-80' />
                                        <span>Coins</span>
                                        <input onChange={(e) => {
                                            setPrice({ ...price, coins: e.target.value })
                                        }} type="text" className='bg-gray-200 bg-opacity-80' />
                                    </div>
                                    <div>
                                        <div className='space-y-4'>
                                            <h1>Image Goes Here...</h1>
                                            <div className={`${image ? 'h-full' : 'hidden'}`}>
                                                <div className='p-2'>
                                                    <img className='h-64 w-52 rounded-sm' src={image ? URL.createObjectURL(image) : ""} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" name="filename" id="" />
                                            </div>
                                            <button onClick={(e) => {
                                                handleSubmit(e)
                                            }} className='rounded text-gray-900 bg-blue-500 p-1 hover:bg-blue-400 hover:text-black transition duration-300'>Upload Image</button>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className='flex text-center justify-center items-center p-4 w-56 bg-gray-500 space-y-1'>
                                            <button onClick={(e) => {
                                                finalSubmit(e)
                                            }}>Submit</button>
                                        </div>
                                        {/*Form*/}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDataV2
