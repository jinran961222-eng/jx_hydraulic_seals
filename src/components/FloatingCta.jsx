import { Link } from 'react-router-dom'

export default function FloatingCta() {
  return (
    <Link to="/" className="fab" aria-label="Request a Quote">
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
      <span>Request a Quote</span>
    </Link>
  )
}
