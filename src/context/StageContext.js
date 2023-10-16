import { createContext, useContext, useState } from 'react'

const StageContext = createContext()

export function StageProvider({ children }) {
  const [selectedStage, setSelectedStage] = useState(null)

  return (
    <StageContext.Provider value={{ selectedStage, setSelectedStage }}>
      {children}
    </StageContext.Provider>
  )
}

export function useStage() {
  return useContext(StageContext)
}
