import React from "react"
import { Link } from "gatsby"

import styles from "./layout.module.css"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  let header

  header = (
    <h3
      className={styles.headline}
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )

  return (
    <div className={styles.container}>
      <header>{header}</header>
      <main>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> | Starter Created By:{" "}
        <a href="https://www.github.com/m0nica">M0nica</a>
      </footer>
    </div>
  )
}

export default Layout
