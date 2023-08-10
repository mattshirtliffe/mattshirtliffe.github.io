import React from 'react'
import * as guffStyles from '../styles/guff.module.css'

const Guff = () => {
  return (
    <section className={guffStyles.guffSection}>
      <div className={guffStyles.guffContent}>
        <p className={guffStyles.guffSectionHeading}>How I can help you</p>
        <div className={guffStyles.guffPosts}>
          <p className={guffStyles.guffHeading}>Full Stack Development</p>
          <p className={guffStyles.guffText}>
            From front-end user interfaces to back-end server logic, I am highly
            skilled at creating comprehensive solutions that precisely integrate
            every component of your project. With a deep understanding of
            JavaScript frameworks like React, as well as Python frameworks like
            Django and Flask, I ensure your application is responsive,
            user-friendly, and secure.
          </p>
          <p className={guffStyles.guffHeading}>Custom Web Development</p>
          <p className={guffStyles.guffText}>
            Need a website that stands out from the crowd? I craft bespoke web
            experiences tailored to your unique requirements. By leveraging my
            expertise in HTML, CSS, and JavaScript libraries, I create visually
            stunning websites that captivate your audience and drive engagement.
          </p>
          <p className={guffStyles.guffHeading}>
            Database Design and Optimisation
          </p>
          <p className={guffStyles.guffText}>
            Data is the lifeblood of any application. I have extensive
            experience in designing and optimising databases using SQL and NoSQL
            technologies. Whether you need a scalable database architecture or
            efficient query optimisation, I ensure your data is securely stored
            and easily accessible.
          </p>
          <p className={guffStyles.guffHeading}>
            API Development and Integration
          </p>
          <p className={guffStyles.guffText}>
            Seamless integration with third-party services is crucial for modern
            applications. I specialise in building robust RESTful APIs and
            integrating them with various services, allowing your application to
            communicate with external systems effortlessly.
          </p>
          <p className={guffStyles.guffHeading}>Project Management</p>
          <p className={guffStyles.guffText}>
            As a freelancer, I am aware of the significance of project
            management. I employ agile approaches and collaborate closely with
            you to establish precise objectives, deliverables, and deadlines. I
            update you on each stage of the development process. This guarantees
            that everything is understandable and that the project is completed
            on schedule and within budget.
          </p>
          <p className={guffStyles.guffHeading}>Agile Development</p>
          <p className={guffStyles.guffText}>
            Adaptability is crucial in the constantly evolving tech industry. I
            employ agile development methodologies, allowing me to respond
            rapidly to changes and deliver solutions on schedule and within
            budget.
          </p>
          <p className={guffStyles.guffHeading}>Cutting-Edge Technologies</p>
          <p className={guffStyles.guffText}>
            In order to provide cutting-edge and resilient solutions, I stay up
            with the latest and greatest trends in software development. I have
            the abilities and knowledge to make your ideas a reality, whether
            it's using cloud computing, integrating AI, or developing mobile
            applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Guff
