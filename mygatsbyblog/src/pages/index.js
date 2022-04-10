import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Isaac Covarrubis Blog" />
    <p className="blog-posts">
    <h2>Is Yashica the best TLR camera?</h2>
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
          <p>Why is this camera often compared to the Rolliflex? Let's find out.</p>
          <Link to="/blog-1/">See full blog story</Link> <br />
        </div>
      </div>
      <h2>Is Mamiya the best medium format camera?</h2>
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
          <p>Mamiya RZ67 is one of the best cameras made and here's why.  </p>
          <Link to="/blog-2/">See full blog story</Link> <br />
        </div>
      </div>
    </p>
  </Layout>
)

export default IndexPage
