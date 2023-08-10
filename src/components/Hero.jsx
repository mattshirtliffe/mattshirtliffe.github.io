import React from 'react'
import * as heroStyles from '../styles/hero.module.css'

const Hero = () => {
  return (
    <section className={heroStyles.hero}>
      <div className={heroStyles.heroContent}>
        <h2 className={heroStyles.tagline}>
          I'm a full-stack software engineer; I develop applications with
          technologies such as React, Next, and Flask.
        </h2>
        <div className={heroStyles.mission}>
          <p className={heroStyles.missionHeading}>About</p>
          <div className={heroStyles.missionText}>
            <p>
              I'm a freelance full stack software engineer, dedicated to
              transforming your ideas into robust and innovative digital
              solutions. With expertise in JavaScript and Python, I bring a
              wealth of knowledge and a passion for creating cutting-edge
              applications that elevate your business to new heights.
            </p>
            <p>
              With a meticulous eye for detail and a knack for problem-solving,
              I pride myself on delivering clean, efficient, and scalable code.
              Whether you need a custom web application, a dynamic e-commerce
              platform, or an intuitive mobile app, I've got you covered.
            </p>
          </div>
        </div>
        <div className={heroStyles.skills}>
          <p className={heroStyles.skillsHeading}>Skills</p>
          <div className={heroStyles.skillsLists}>
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
              <li>Flask</li>
              <li>Django</li>
              <li>MySQL</li>
              <li>Redis</li>
              <li>Flutter</li>
            </ul>
            <ul>
              <li>Gatsby</li>
              <li>Next</li>
              <li>TDD</li>
              <li>AWS</li>
              <li>Azure</li>
              <li>RESTful APIs</li>
              <li>IoT</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
