import React from 'react'
import * as companiesStyles from '../styles/companies.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Companies = () => {
  return (
    <section className={companiesStyles.section}>
      <div className={companiesStyles.content}>
        <p className={companiesStyles.sectionHeading}>
          Companies I've worked with
        </p>
        <div className={companiesStyles.posts}>
          <div className={companiesStyles.post}>
            <StaticImage
              alt="Harvey Nichols"
              src="../assets/HarveyNichols_logo.svg"
              placeholder="blurred"
              width={500}
              quality={100}
            />
          </div>
          <div className={companiesStyles.post}>
            <StaticImage
              alt="Network Rail"
              src="../assets/Network_Rail_logo.svg"
              placeholder="blurred"
              width={500}
              quality={100}
            />
          </div>
          <div className={companiesStyles.post}>
            <StaticImage
              alt="Transport for London"
              src="../assets/Transport-for-London-Logo.svg"
              placeholder="blurred"
              width={500}
              quality={100}
            />
          </div>
          <div className={companiesStyles.post}>
            <StaticImage
              alt="Maplin Electronics"
              src="../assets/Maplin_Electronics_logo.svg"
              placeholder="blurred"
              width={500}
              quality={100}
            />
          </div>
          <div className={companiesStyles.post}>
            <StaticImage
              alt="Diageo"
              src="../assets/Diageo.svg"
              placeholder="blurred"
              width={500}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
