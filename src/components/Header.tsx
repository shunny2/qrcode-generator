import { Toggle } from './Toggle'

export function Header() {
    return (
        <header className="fixed">
            <div className="w-screen h-16 px-4 flex items-center justify-end dark:text-white">
                <Toggle />
            </div>
        </header>
    )
}