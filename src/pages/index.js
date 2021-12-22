import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const buttonsContainer = {
  display: 'flex',
  justifyContent: 'space-around'
}

const button = {
  padding: '10px 30px',
  borderRadius: '4px',
  cursor: 'pointer',
  color: 'white'
}

const dangerButton = {
  backgroundColor: 'rgba(201, 38, 38)'
}

const primaryButton = {
  backgroundColor: 'rgba(24, 131, 62)',
}

const link = {
  textDecoration: 'none'
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>How is going?</title>
      <h1 style={headingStyles}>
        How is going?
      </h1>
      <div style={buttonsContainer}>
        <Link to="/awesome" style={link}>
          <div style={{...button, ...primaryButton}}>Awesome</div>
        </Link>
        <Link to="/eh" style={link}>
          <div style={{...button, ...dangerButton}}>Eh, could be better</div>
        </Link>
      </div>
    </main>
  )
}

export default IndexPage
