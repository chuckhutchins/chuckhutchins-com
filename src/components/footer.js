import React from "react"
import Haunts from "./haunts"

const Footer = () => (
  <footer>
    <Haunts />
    <div className="copyright">
      &copy; {new Date().getFullYear()} Chuck Hutchins
    </div>
  </footer>
)

export default Footer
