import { createContext } from "react";
import { useState } from "react";
import React from 'react'

export const heroContext = createContext({})


function Context({ children }) {
    const [heroObj, setHeroObj] = useState()
    const [keyWord, setKeyWord] = useState('')


    return (
        <div>
            <heroContext.Provider value={{ heroObj, setHeroObj, keyWord, setKeyWord }}>
                {children}
            </heroContext.Provider>
        </div>
    )
}

export default Context


