import { useState } from 'react'
import { AppRouter } from './Components/AppRouter/AppRouter'
import { Container } from './Components/Container/Container'
import { Header } from "./Components/Header/Header.jsx"
import { Footer } from './Components/Footer/Footer.jsx'

function App() {
  return (
    <>
        <Container>
          <Header />
            <AppRouter>
            
            </AppRouter>
          <Footer />
        </Container>
    </>
  )
}

export default App
