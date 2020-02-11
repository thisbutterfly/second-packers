import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>{children}</main>
      <footer style={{ background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", height: "3vh" }}>
        <div className="container has-text-white">
          ©Copyrights reserved {new Date().getFullYear()},
          {` `}
          <a href="http://sjjs.in/">SJJS PVt LTd</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
