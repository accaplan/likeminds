import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Mailchimp from 'react-mailchimp-form'

const Header = () => {
  const [modifier, setModifier] = useState('')
  const showSignUp = () => {
    setModifier('is-visible')
  }
  const hideSignUp = ({ target }) => {
    if (!target.closest('.js-signup')) {
      setModifier('')
    }
  }

  useEffect(() => {
    document.querySelector('.js-signup input').focus()
    if (modifier === 'is-visible') {
      document.querySelector('.js-layout').addEventListener('click', hideSignUp)
    } else {
      document.querySelector('.js-signup').removeEventListener('click', hideSignUp)
    }
  })

  return (
    <div className='header'>
      <div className='logo'>
        <Logo />
      </div>

      <div className='header__info'>
        <p><Logo classes='no-text' /> is a story of the building of the Idle Hours Company.</p>
        <p><Logo classes='no-text' /> exists to connect <span className='animate'>Dawdlists</span> <button onClick={showSignUp} type='button'>Sign Up</button> for announcements.</p>
        <div className={`header__signup js-signup ${modifier}`}>
          <label htmlFor='headerSignup'>STAY TUNED</label>
          <Mailchimp
            action='https://idlehours.us6.list-manage.com/subscribe/post?u=db25ce5cf2d3509d4c7520820&amp;id=41a2829d83'
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email Address…',
                type: 'email',
                required: true,
              },
            ]}
            messages={
              {
                sending: 'Sending...',
                success: 'We thank you!',
                error: 'An unexpected internal error has occurred.',
                empty: 'Please give us your e-mail address.',
                duplicate: 'Too many subscribe attempts for this email address',
                button: 'Sign Up',
              }
            }
          />
        </div>
      </div>

      <div className='header__button'>
        <a href='https://www.idlehours.co' target='_blank'>Back to shop</a>
      </div>

      <nav className='header__socials'>
        <a href='https://instagram.com/idlehoursco' target='_blank'>Instagram</a>
        <a href='mailto:info@idlehours.co'>email</a>
      </nav>
    </div >
  )
}

export default Header
