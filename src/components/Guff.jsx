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
            From front-end user interfaces to back-end server logic, I excel at
            building comprehensive solutions that seamlessly integrate every
            layer of your project. With a deep understanding of JavaScript
            frameworks like React, as well as Python frameworks like Django and
            Flask, I ensure your application is responsive, user-friendly, and
            fully functional.
          </p>
          <p className={guffStyles.guffHeading}>Custom Web Development</p>
          <p className={guffStyles.guffText}>
            Need a website that stands out from the crowd? I craft bespoke web
            experiences tailored to your unique requirements. By leveraging my
            expertise in HTML5, CSS3, and JavaScript libraries, I create
            visually stunning websites that captivate your audience and drive
            engagement.
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
            As a freelancer, I understand the importance of efficient project
            management. I follow agile methodologies, collaborating closely with
            you to define clear goals, deliverables, and timelines. I keep you
            informed at every stage of the development process, ensuring
            transparency and successful project completion.
          </p>
          <p className={guffStyles.guffHeading}>Agile Development</p>
          <p className={guffStyles.guffText}>
            Adaptability is key in the fast-paced tech industry. I embraces
            agile development methodologies, enabling me to swiftly respond to
            changes and deliver results in a timely manner. Your project will be
            executed with agility, precision, and flexibility.
          </p>
          <p className={guffStyles.guffHeading}>Cutting-Edge Technologies</p>
          <p className={guffStyles.guffText}>
            I stay updated with the latest trends in software development to
            deliver innovative and future-proof solutions. Whether it's
            leveraging the power of cloud computing, integrating AI, or
            developing mobile applications, I have the skills and knowledge to
            turn your ideas into reality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Guff
