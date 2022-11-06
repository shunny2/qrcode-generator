import { useContext } from 'react'

import { ThemeContext, ThemeContextDataProps } from '../contexts/ThemeContext'

export function useTheme(): ThemeContextDataProps {
    const context = useContext(ThemeContext)

    return context
}
