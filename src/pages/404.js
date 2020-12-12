import React from "react"
import {Link } from "gatsby"

const NotFoundPage = () => (
  <div id="errorPage">
    <div className="contained align-items-center" style = {{alignSelf : "center"}}>
      <h1 id = "errorTitle" style={{}}>404</h1>
      <h2 style = {{color : "#FFFFFF", fontWeight : 400}}>Looks like you're lost</h2>
      <h4 style = {{color : "#FFFFFF", fontWeight : 200}}>Let's get you back home. Click on the go back button.</h4>
      <Link to= "/">
      <button id = "errorBtn"> go back</button> </Link>
    </div>
  </div>
)

export default NotFoundPage
