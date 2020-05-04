import React from "react"
import { Link, graphql } from "gatsby"

import styles from "./index.module.css"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  const title = data.site.siteMetadata.title
  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" />
      <Bio onHomepage />
      {posts.map(({ node }) => {
        const time = node.timeToRead
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article className={styles.articleCard} key={node.fields.slug}>
            <header>
              <h3>
                <Link className={styles.articleTitle} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <small> &bull; {time} min.</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
            <button className={styles.button}>
              {" "}
              <Link
                to={node.fields.slug}
                styles={{ textDecoration: `none` }}
                className={styles.link}
              >
                read article <FontAwesomeIcon icon={faAngleDoubleRight} />
              </Link>
            </button>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          timeToRead
        }
      }
    }
  }
`
