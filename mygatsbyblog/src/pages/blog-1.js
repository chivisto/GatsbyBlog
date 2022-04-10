import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Blog 1" />

    <h2>Mamiya is the Best</h2>
    <StaticImage
      src="../images/mamiya1.jpeg"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A mamiya Camera"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>I had read up a bunch on the Mamiya RZ67 and knew it was widely regarded as the poster
      child for quality and reliability in the medium format world. For a long time it was
      my ‘white whale’ camera – I really wanted one, but at the time it was financially unobtainable.
      After a chance meeting during a photoshoot with a friend, however, I picked up a mint
      condition Mamiya RZ67 Pro II and 90mm lens for a quarter of what I was expecting to spend. Score!
    </p>
    <h2>First Impressions</h2>
    <p>
      As a guy who mainly shoots portraits, this camera is a dream to bring on set.
      One of the first things I noticed about the Mamiya RZ67 is how nice it feels in the
      hand. Compared to the Mamiya 645J, which felt like shooting with a VCR, the RZ feels
      like a glove. Part of this is due to the waist level finder which allows you to comfortably
      hold the camera at waist or chest level and look down to compose the frame. This, and
      the rotating back, which I’ll get into later, is in my opinion one of the biggest draws
      to the Mamiya system. I find the viewfinder on the RZ67 super bright, allowing for an
      easy focusing process and an unparalleled shooting experience. There’s really nothing
      quite like framing a shot through the huge ground glass.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
