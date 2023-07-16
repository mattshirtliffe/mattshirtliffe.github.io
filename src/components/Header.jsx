import React, { useState } from 'react'
import * as headerStyles from '../styles/header.module.css'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { Twitter, Facebook, Linkedin, GitHub, Mail } from 'react-feather'

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
        <a href={`mailto:${contactEmail}`} aria-label="Contact via email">
          <Mail />
        </a>
        <a
          href="https://twitter.com/MShirtliffe"
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="https://www.facebook.com/mattshirtliffe"
          aria-label="Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-shirtliffe-885746246/"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/mattshirtliffe"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
      </nav>
      <button
        aria-label="MobileMenu"
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
