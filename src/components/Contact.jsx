import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import * as contactStyles from '../styles/contact.module.css'

const Contact = () => {
  const [state, handleSubmit] = useForm('mnqknnlg')

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
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className={contactStyles.formInputContainer}>
              <label className={contactStyles.label} htmlFor="email">
                Email
              </label>
              <input
                className={contactStyles.input}
                type="email"
                id="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
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
              />
              <ValidationError
                prefix="phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className={contactStyles.formInputContainer}>
              <div className={contactStyles.label}>Message</div>
              <textarea
                rows={10}
                className={`${contactStyles.textarea} ${contactStyles.input}`}
                name="message"
                id="message"
              ></textarea>
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className={contactStyles.formButtonContainer}>
              <button
                type="submit"
                disabled={state.submitting}
                className={contactStyles.button}
              >
                Submit
              </button>
            </div>
            {state.succeeded ? (
              <p className={contactStyles.formSuccessMessage}>
                Thanks for being awesome! I have received your message and would
                like to thank you for contacting me. Talk to you soon.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
