import { Link } from 'react-router-dom'
import dexianPageShell from '../components/posse/PossePageShell'

export default function CreditsPage() {
  return (
    <dexianPageShell>
      <div className="credits-page">
        <Link to="/" className="mid-font close-btn">
          Close
        </Link>
        <h1 className="mid-font">Credits</h1>
        <p className="mono-font">
          Website design & development — dexian Agency. All imagery and content ©
          respective clients and dexian Agency.
        </p>
        <p className="mono-font">
          Personal data policy: contact{' '}
          <a href="mailto:hello@dexian-agency.com">hello@dexian-agency.com</a> for any
          privacy-related requests.
        </p>
        <Link to="/" className="mono-font button" style={{ marginTop: 32, display: 'inline-block' }}>
          Back home
        </Link>
      </div>
    </dexianPageShell>
  )
}
