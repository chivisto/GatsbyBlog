import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Isaac Covarrubis Blog" />
    <h1>The Bestest Blog Ever Made</h1>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/blog-1/">Go to blog post 1</Link> <br />
      <Link to="/blog-2/">Go to blog post 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
