import { useState } from 'react'
import { AppRouter } from './Components/AppRouter/AppRouter'
import { Container } from './Components/Container/Container'
import { ContentWrapper } from './Components/ContentWrapper/ContentWrapper.jsx'
import { Header } from "./Components/Header/Header.jsx"
import { Footer } from './Components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <ContentWrapper>
          <Header />
            <AppRouter>
            
            </AppRouter>
          <Footer />
      </ContentWrapper>
    </>
  )
}

export default App
