import React, { useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider, { Box } from "../components/slider"

const IndexPage = () => {
  useEffect(() => {
    let prevRatio = 0.0
    let visibility = "ratio"
    function buildThresholdList() {
      let thresholds = []
      let numSteps = 20

      for (let i = 10.0; i <= numSteps; i++) {
        let ratio = i / numSteps
        thresholds.push(ratio)
      }

      thresholds.push(0)
      return thresholds
    }
    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.intersectionRatio === 1) {
          console.log("yes")
        }
        entry.target.style.opacity = visibility.replace(
          "ratio",
          entry.intersectionRatio
        )

        prevRatio = entry.intersectionRatio
      })
    }
    return () => {
      let options = {
        root: document.querySelector("#test"),
        rootMargin: "0px",
        threshold: buildThresholdList(),
      }
      let observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(document.querySelector("#test-2"))
    }
  })
  return (
    <Layout>
      <SEO title="Home" />
      <p>Work</p>
      <ScrollBox id="test">
        <Slider>
          <Box url="https://static.dribbble.com/users/989466/screenshots/13974937/media/3eb8f579acba8b33ca743b0201781f0e.png" />
          <Box url="https://static.dribbble.com/users/989466/screenshots/13962611/media/f49802a5379ef6825f4e990fda682aee.png" />
          <Box url="https://static.dribbble.com/users/989466/screenshots/13935263/media/6afbfa96c16d8519c0df2924c8d34821.png" />
          <Box url="https://static.dribbble.com/users/989466/screenshots/9709450/media/4b5bbeb2205458c488f231f388ae1ccc.png" />
        </Slider>
      </ScrollBox>
      <p>Yo</p>
    </Layout>
  )
}

export const ScrollBox = styled.div`
  background: #ffffff;
  display: inline-block;
  width: 400px;
  height: 400px;
  border: 1px solid black;
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 200px);
`

export default IndexPage
