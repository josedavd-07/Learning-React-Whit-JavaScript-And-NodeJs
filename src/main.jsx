import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrimerComponente from './PrimerComponente'
import SegundoComponente from './SegundoComponente'
// import { TercerComponente } from './TercerComponente'
// import { CuartoComponente } from './CuartoComponente'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente />
    <SegundoComponente />
    <TercerComponente />
    <CuartoComponente />
  </StrictMode>,
)
