import { createContext, useState, useEffect, ReactNode } from 'react'

interface ThemeProviderProps {
    children: ReactNode;
}

export interface ThemeContextDataProps {
    theme: string;
    setTheme: ({ }: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextDataProps)

export function ThemeContextProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') !== 'dark' ? 'light' : 'dark'
    )

    function addOrRemoveTheme() {
        const root = document.documentElement.classList
        const oldTheme = theme === 'dark' ? 'light' : 'dark'

        root.remove(oldTheme)
        root.add(theme)
        localStorage.setItem('theme', theme)
    }

    useEffect(() => {
        addOrRemoveTheme()
    }, [theme])

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
