import { Header } from './components/Header'
import { QrCode } from './components/QrCode'
import { ThemeContextProvider } from './contexts/ThemeContext'

import './styles/main.css'

function App() {
    return (
        <ThemeContextProvider>
            <Header />
            <QrCode />
        </ThemeContextProvider>
    )
}

export default App