import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider attribute="class" defaultTheme="dark">
      <main className="dark min-h-screen transition-none text-foreground bg-background">
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>,
)
