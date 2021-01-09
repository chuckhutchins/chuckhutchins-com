import React from "react"
import PropTypes from "prop-types"

import Header from "./header-p5r"
import Footer from "./footer-p5r"
import "./styles.scss"

const Layout = ({ children }) => {

  return (
    <section className="container p5r">
      <Header />
      {children}
      <Footer />
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
