import * as React from 'react'
import Seo from '../components/seo'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Guff from '../components/Guff'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Guff />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
