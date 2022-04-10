import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"


const ThirdPage = () => (
  <Layout>
    <Seo title="Blog 1" />

    <h2>Yashica is the Greatest TLR</h2>
    <StaticImage
      src="../images/yashica1.jpeg"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A yashica Camera"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      This is a Yashica Mat 124G. This might not look like any other camera you have ever seen before.
      It kinda looks like some magical box; the top folds open, there’s a crank on the side, why on earth
      are there two lenses? This camera forces you to completely change your approach to photography.
      And I don’t think that’s a bad thing. This Yashica Mat 124G is categorized as a TLR (Twin
      Lens Reflex System), but before we get too technical, let’s first have a look at what kind of
      photos, this oddly handsome, camera can capture. Continue on for the review of this unique looking
      camera.
    </p>
    <h2>Sizing</h2>
    <p>
      Loaded with one of my favourite colour films - Kodak Ektar. A fantastic film that has high saturation
      and high contrast – perfect for the South African sun. When underexposed, it gets a lovely blue
      tint in the shadows. This is mostly visible in the greens. This film is, in analog photography
      terms, a brand spanking new creation. Only released in 2008. But it became an instant classic.
      The camera was produced somewhere between 1970 and 1986. An incomprehensibly long production
      cycle compared to nowadays. It’s actually an identical copy of the more expensive, German
      Rolleiflex. But it doesn’t cheapen the camera or its potential to me.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
