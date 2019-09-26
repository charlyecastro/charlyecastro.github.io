/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Contact = () => {
    return (
        <>
            <section  id ="contact" className = "contact " style = {{ height : "100%", justifyContent : "center", alignItems : "center", alignSelf : "center"}}>
                <div data-aos="fade-up" className = "contained" style ={{maxWidth: "800px", height : "100%", borderRadius : "5px", justifyContent : "center", alignSelf : "center"}}>
                <div data-aos="fade-up" data-aos-delay="200" data-aos-anchor="#contact"  className = "contactForm">
                <h2 className = "contactTitle">Let's Talk</h2>
                <form style = {{display : "flex", flexDirection : "column"}}>
                    <label>Full Name</label>
                    <input type = "text" name = "name" placeholder = "Peter Parker"></input>
                    <label>Email</label>
                    <input type = "text" name = "email" placeholder = "spidey@avengers.com"></input>
                    <label>Message</label>
                    <textarea name="message" placeholder=" Hi Charlye" rows = {4}></textarea>
                    <input type="submit" value="Send"></input>
                </form>
                </div>
                </div>
            </section>
        </>
    )
}

export default Contact