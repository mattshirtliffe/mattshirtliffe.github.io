import React, { useState } from 'react'
import * as headerStyles from '../styles/header.module.css'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false)

  const { contactEmail } = useSiteMetadata()
  return (
    <header className={headerStyles.navbar}>
      <a className={headerStyles.logo} href="/">
        <h1>Matthew Shirtliffe</h1>
      </a>
      <nav className={headerStyles.links}>
        <a className={headerStyles.contact} href={`mailto:${contactEmail}`}>
          Contact
        </a>
      </nav>
      <nav
        className={`${headerStyles.mobileNav} ${
          showHamburger ? headerStyles.openMobileNav : ''
        }`}
      >
        <a className={headerStyles.contact} href={`mailto:${contactEmail}`}>
          Contact
        </a>
      </nav>
      <button
        className={headerStyles.hamburger}
        onClick={() => setShowHamburger(!showHamburger)}
      >
        <div
          className={`${headerStyles.bar} ${
            showHamburger ? headerStyles.animateBar1 : ''
          }`}
        ></div>
        <div
          className={`${headerStyles.bar} ${
            showHamburger ? headerStyles.animateBar2 : ''
          }`}
        ></div>
        <div
          className={`${headerStyles.bar} ${
            showHamburger ? headerStyles.animateBar3 : ''
          }`}
        ></div>
      </button>
    </header>
  )
}

export default Header
