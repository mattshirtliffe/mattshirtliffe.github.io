import * as React from 'react'
import Seo from '../components/seo'
import Hero from '../components/Hero'
import Guff from '../components/Guff'
import Contact from '../components/Contact'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Hero />
        <Guff />
        <Contact />
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
