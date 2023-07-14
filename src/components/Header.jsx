import React from 'react'
import * as headerStyles from '../styles/header.module.css'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = () => {
  const { contactEmail } = useSiteMetadata()
  return (
    <header className={headerStyles.navbar}>
      <a className={headerStyles.logo} href="#contact">
        <h1>Matthew Shirtliffe</h1>
      </a>
      <nav className={headerStyles.links}>
        <a className={headerStyles.contact} href={`mailto:${contactEmail}`}>
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
