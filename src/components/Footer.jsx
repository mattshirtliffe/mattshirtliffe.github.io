import React from 'react'
import * as footerStyles from '../styles/footer.module.css'
import { Twitter, Facebook, Linkedin, GitHub } from 'react-feather'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <a href="https://twitter.com/MShirtliffe">
          <Twitter />
        </a>
        <a href="https://www.facebook.com/mattshirtliffe">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/in/matthew-shirtliffe-885746246/">
          <Linkedin />
        </a>
        <a href="https://github.com/mattshirtliffe">
          <GitHub />
        </a>
        <p>Copyright &copy; Matthew Shirtliffe {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
