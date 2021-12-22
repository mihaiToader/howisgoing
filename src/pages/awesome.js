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
      <title>Awesome, nice!</title>
      <h1 style={headingStyles}>
        Yeeeey paaaarty 
      </h1>
      <div style={gifContainer}>
        <div style={iframe}><iframe allow="fullscreen" title="awesome" frameBorder="0" height="270" src="https://giphy.com/embed/G96zgIcQn1L2xpmdxi/video" width="480"></iframe></div>
      </div>
    </main>
  )
}

export default IndexPage
