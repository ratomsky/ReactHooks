import React, { useContext } from 'react'
import { useState } from "react";

const AlertContext = React.createContext()

export const useAlert = () => {
  return useContext(AlertContext)
}

export const AlertProvider = ({children}) => {
  const [alert, setAlert] = useState(false);

  const toggle = () => setAlert((prev) => !prev);

  return (
  <AlertContext.Provider value={{
    visibility: alert,
    toggle
    }}>
    {children}
  </AlertContext.Provider>
  )
}