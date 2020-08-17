import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slider, { Box } from "../components/slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Work</p>
    <Slider>
      <Box url="https://static.dribbble.com/users/989466/screenshots/13974937/media/3eb8f579acba8b33ca743b0201781f0e.png" />
      <Box url="https://static.dribbble.com/users/989466/screenshots/13962611/media/f49802a5379ef6825f4e990fda682aee.png" />
      <Box url="https://static.dribbble.com/users/989466/screenshots/13935263/media/6afbfa96c16d8519c0df2924c8d34821.png" />
      <Box url="https://static.dribbble.com/users/989466/screenshots/9709450/media/4b5bbeb2205458c488f231f388ae1ccc.png" />
    </Slider>
  </Layout>
)

export default IndexPage
