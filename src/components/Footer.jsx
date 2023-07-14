import React from 'react'
import * as footerStyles from '../styles/footer.module.css'
import { Twitter, Facebook, Linkedin, GitHub } from 'react-feather'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
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
        <p>Copyright &copy; Matthew Shirtliffe {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
