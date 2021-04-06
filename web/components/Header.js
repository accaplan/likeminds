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
        <p><Logo classes='no-text' /> is an internet garden for all things Dawdlism.</p>
        <p><Logo classes='no-text' /> exists to connect <span className='animate'>Dawdlists</span> <button onClick={showSignUp} type='button'>Sign Up</button> for announcements.</p>
        <div className={`header__signup js-signup ${modifier}`}>
          <label htmlFor='headerSignup'>STAY TUNED</label>
          <Mailchimp
            action='https://camp.us19.list-manage.com/subscribe/post?u=358143694606dde15fb491f0b&amp;id=c06b53b3db'
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
        <a href='https://idlehours.substack.com' target='_blank'>Archive</a>
      </div>

      <nav className='header__socials'>
        <a href='https://instagram.com/idlehoursco' target='_blank'>instagram</a>
        <a href='mailto:info@idlehours.co'>email</a>
      </nav>
    </div >
  )
}

export default Header
