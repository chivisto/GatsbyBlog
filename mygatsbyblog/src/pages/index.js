import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Isaac Covarrubis Blog" />
    <h1>The Bestest Blog Ever Made</h1>
    <p className="blog-posts">
      <div className="container">
        <StaticImage
          src="../images/yashica.jpeg"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Yashica Camera"
          style={{ marginBottom: `1.45rem` }}
        />
        <div className="blog-title">
          <Link to="/blog-1/">Go to blog post 1</Link> <br />
        </div>
      </div>
      <div className="container">
        <StaticImage
          src="../images/mamiya.jpeg"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Mamiya Camera"
          style={{ marginBottom: `1.45rem` }}
        />
        <div className="blog-title">
          <Link to="/blog-2/">Go to blog post 2</Link> <br />
        </div>
      </div>

    </p>
  </Layout>
)

export default IndexPage
