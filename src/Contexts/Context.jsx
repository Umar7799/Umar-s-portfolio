import React, { createContext, useContext, useState } from 'react'

export const InfoContext = createContext()
export function GetInfo() {
    return useContext(InfoContext)
}





export function InfoProvider({ children }) {

    const [sidebarVal, setSidebarVal] = useState()
    function getSidebarVal(val) {
        setSidebarVal(val)
    }

    const [isOpen, setIsOpen] = useState()
    function getisOpenEmail(val) {
        setIsOpen(val)
    }










    return (
        <InfoContext.Provider value={{ getSidebarVal, sidebarVal, getisOpenEmail, isOpen }}>
            {children}
        </InfoContext.Provider>
    )
}