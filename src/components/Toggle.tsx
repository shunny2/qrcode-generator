import { MoonStars, SunDim } from 'phosphor-react'
import { useTheme } from '../hooks/useTheme'

export function Toggle() {
    const { theme, setTheme } = useTheme()

    function handleThemeSwitch() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <button onClick={handleThemeSwitch}>
            {theme === 'dark' ?
                <SunDim size={32} weight="duotone" className='hover:text-slate-500' /> :
                <MoonStars size={32} weight="duotone" className='hover:text-slate-700' />
            }
        </button>
    )
}