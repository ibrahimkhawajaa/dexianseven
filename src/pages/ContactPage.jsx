import { useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalTitle from '../components/posse/GlobalTitle'
import PossePageShell from '../components/posse/PossePageShell'
import { COPY_ICON } from '../constants/posse'

const CONTACT_HEADLINE = `Get in touch
with us`

const SELECT_ARROW =
  "data:image/svg+xml,%3csvg%20fill='none'%20height='8'%20viewBox='0%200%2015%208'%20width='15'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m1%20.75%206.5%206.5%206.5-6.5'%20stroke='%23000'/%3e%3c/svg%3e"

const FILE_PLUS =
  "data:image/svg+xml,%3csvg%20fill='none'%20height='15'%20viewBox='0%200%2015%2015'%20width='15'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20stroke='%23000'%3e%3cpath%20d='m7.5%201v14'/%3e%3cpath%20d='m1%207.5%206.5-6.5%206.5%206.5'/%3e%3c/g%3e%3c/svg%3e"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('Upload a file')

  const copyEmail = () => {
    navigator.clipboard?.writeText('hello@dexian-agency.com')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const onFile = (e) => {
    const file = e.target.files?.[0]
    setFileName(file ? file.name : 'Upload a file')
  }

  const clearFile = () => {
    setFileName('Upload a file')
    const input = document.getElementById('file')
    if (input) input.value = ''
  }

  if (submitted) {
    return (
      <PossePageShell>
        <div className="contact-page df">
          <Link to="/" className="close-btn mid-font">
            Close
          </Link>
          <div className="form-valid">
            <div className="valid-inner">
              <p className="big-font">Thank you</p>
              <p className="mono-font" style={{ marginTop: 24, color: 'var(--grey)' }}>
                We&apos;ll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      </PossePageShell>
    )
  }

  return (
    <PossePageShell>
      <div className="contact-page df">
        <Link to="/" className="close-btn mid-font">
          Close
        </Link>

        <div className="anim">
          <h1 className="sr-only">{CONTACT_HEADLINE}</h1>
          <GlobalTitle text={CONTACT_HEADLINE} indentFirst={false} />

          <div className="phone-mail mono-font df">
            <a href="tel:0613160277">0613160277</a>
            <span>|</span>
            <a href="mailto:hello@dexian-agency.com">hello@dexian-agency.com</a>
            <button type="button" className="copy" onClick={copyEmail} aria-label="Copy email">
              <img src={COPY_ICON} alt="" width={11} height={12} />
            </button>
          </div>

          <form id="form-contact" className="df" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              name="Name"
              id="name"
              type="text"
              className="mid-font"
              placeholder="First name & name*"
              required
            />

            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              name="Email"
              id="email"
              type="email"
              className="mid-font"
              placeholder="Email*"
              required
            />

            <label className="sr-only" htmlFor="tel">
              Phone number
            </label>
            <input
              name="Phone"
              id="tel"
              type="tel"
              className="mid-font"
              placeholder="Phone number*"
              required
            />

            <div className="select-section">
              <img src={SELECT_ARROW} className="detail" alt="" />
              <label className="sr-only" htmlFor="about">
                Subject
              </label>
              <select name="About" id="about" required className="mid-font" defaultValue="">
                <option value="" disabled>
                  Subject *
                </option>
                <option value="I want to brief you">I want to brief you</option>
                <option value="I want to work for you">I want to work for you</option>
              </select>
            </div>

            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              name="Message"
              id="message"
              className="mid-font"
              placeholder="Message *"
            />

            <div className="file-section">
              <img src={FILE_PLUS} className="detail" alt="" />
              <label className="sr-only" htmlFor="file">
                Upload a file
              </label>
              <input
                type="file"
                name="File"
                id="file"
                accept=".txt,.pdf,.ppt,.pptx"
                onChange={onFile}
              />
              <span className="file-name mid-font">{fileName}</span>
              {fileName !== 'Upload a file' && (
                <button type="button" id="clearButton" onClick={clearFile} aria-label="Clear file">
                  ×
                </button>
              )}
            </div>

            <div className="df rgpd-line rgpd">
              <input type="checkbox" id="rgpd" name="rgpd" required />
              <label className="mono-font" htmlFor="rgpd">
                I agree to be contacted by dexian AGENCY, in accordance with the{' '}
                <Link to="/pages/privacy">personal data policy</Link>.
              </label>
            </div>

            <button type="submit" className="mid-font df">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </PossePageShell>
  )
}
