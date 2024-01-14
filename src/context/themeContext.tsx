import { createContext, useState } from 'react'

interface IThemeProviderProps {
  children?: React.ReactNode
}

interface IThemeContextValue {
  isNight: boolean
  switchTheme: () => void
}

export const ThemeContext = createContext<IThemeContextValue>({
  isNight: true,
  switchTheme: () => {},
})

export const ThemeContextProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [isNight, setIsNight] = useState(true)

  const switchTheme = () => {
    console.log('isNight: ', isNight)
    setIsNight((prevValue) => !prevValue)
  }

  const contextValue: IThemeContextValue = {
    isNight,
    switchTheme,
  }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
