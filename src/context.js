import React, {createContext, useState} from 'react'

export const MenuContext = createContext()

export const MenuProvider = ({children}) => {
    const [toggle, setToggle] = useState(false)

    const actToggle = () => {
        setToggle(!toggle)
    }

    return (
        <MenuContext.Provider value={{toggle, actToggle}}>
            {children}
        </MenuContext.Provider>
    )
}