import React, { useState } from 'react'
import { object, string } from 'yup'
import * as contactStyles from '../styles/contact.module.css'

const Contact = () => {
  const contactSchema = object({
    name: string().required('name is required'),
    email: string()
      .email('a valid email is required')
      .required('email is required'),
    phone: string().required('phone is required'),
    message: string().optional(),
  })

  const initContactErrorState = {
    name: null,
    email: null,
    phone: null,
  }

  const initContactState = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  const showMessage = (key) => {
    if (key === 1) {
      return (
        <p className={contactStyles.formSuccessMessage}>
          Thanks for being awesome! I have received your message and would like
          to thank you for contacting me. Talk to you soon.
        </p>
      )
    } else if (key === 2) {
      return (
        <p className={contactStyles.formErrorMessage}>
          Oops! There was a problem submitting the form.
        </p>
      )
    } else {
      return null
    }
  }

  const [contact, setContact] = useState(initContactState)

  const [submitState, setSubmitState] = useState(0)

  const [contactError, setContactError] = useState(initContactErrorState)

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setContactError(initContactErrorState)
      const validContact = await contactSchema.validate(contact, {
        abortEarly: false,
      })

      await postToFormspree(validContact)
    } catch (err) {
      const newContactErrorState = {}
      for (const er of err.inner) {
        newContactErrorState[er.path] = er.message
      }
      setContactError({
        ...initContactErrorState,
        ...newContactErrorState,
      })
    }
  }

  const postToFormspree = async (contact) => {
    try {
      const data = new FormData()
      for (let key of Object.keys(contact)) {
        data.append(key, contact[key])
      }

      const response = await fetch('https://formspree.io/f/mnqknnlg', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      const responseData = await response.json()
      if (responseData.ok) {
        setSubmitState(1)
        setContact(initContactState)
        setContactError(initContactErrorState)
      } else {
        setSubmitState(2)
      }
    } catch (error) {}
  }

  return (
    <section className={contactStyles.section}>
      <div className={contactStyles.content}>
        <p className={contactStyles.heading}>Contact</p>
        <div className={contactStyles.formContainer}>
          <form className={contactStyles.form} onSubmit={handleSubmit}>
            <div className={contactStyles.formInputContainer}>
              <label className={contactStyles.label} htmlFor="name">
                Name
              </label>
              <input
                className={contactStyles.input}
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={contact.name}
              />
              {contactError.name ? (
                <p className={contactStyles.errorText}>{contactError.name}</p>
              ) : null}
            </div>
            <div className={contactStyles.formInputContainer}>
              <label className={contactStyles.label} htmlFor="email">
                Email
              </label>
              <input
                className={contactStyles.input}
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                value={contact.email}
              />
              {contactError.email ? (
                <p className={contactStyles.errorText}>{contactError.email}</p>
              ) : null}
            </div>
            <div className={contactStyles.formInputContainer}>
              <label className={contactStyles.label} htmlFor="phone">
                Phone
              </label>
              <input
                className={`${contactStyles.input}`}
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={contact.phone}
              />
              {contactError.phone ? (
                <p className={contactStyles.errorText}>{contactError.phone}</p>
              ) : null}
            </div>
            <div className={contactStyles.formInputContainer}>
              <label className={contactStyles.label} htmlFor="message">
                Message
              </label>
              <textarea
                rows={10}
                className={`${contactStyles.textarea} ${contactStyles.input}`}
                name="message"
                id="message"
                onChange={handleChange}
                value={contact.message}
              ></textarea>
            </div>
            <div className={contactStyles.formButtonContainer}>
              <button type="submit" className={contactStyles.button}>
                Submit
              </button>
            </div>

            {showMessage(submitState)}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
