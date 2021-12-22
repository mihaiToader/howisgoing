import * as React from "react"

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

const gifContainer = {
  display: 'flex',
  justifyContent: 'space-around'
}

const iframe = {
  width: '480px'
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Oh, sorry!</title>
      <h1 style={headingStyles}>
        Oh, it will be better, don't worry
      </h1>
      <div style={gifContainer}>
        <div sstyle={iframe}><iframe allow="fullscreen" title="eh" frameBorder="0" height="480" src="https://giphy.com/embed/AFhlgdxqzAtFMIgpBA/video" width="480"></iframe></div>
      </div>
    </main>
  )
}

export default IndexPage
