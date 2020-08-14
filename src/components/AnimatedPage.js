import React from "react"
import PageTransition from "gatsby-plugin-page-transitions"
import Transition from "react-transition-group/Transition"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const pageTransitionEvent = "gatsby-plugin-page-transition::exit"
const duration = 300

class AnimatedPage extends React.Component {
  constructor(props) {
    super(props)
    this.listenHandler = this.listenHandler.bind(this)
    this.state = {
      in: false,
    }
  }

  componentDidMount() {
    global.window.addEventListener(pageTransitionEvent, this.listenHandler)
    this.setState({
      in: true,
    })
  }

  listenHandler() {
    this.setState({
      in: false,
    })
  }

  componentWillUnmount() {
    global.window.removeEventListener(pageTransitionEvent, this.listenHandler)
  }

  render() {
    return (
      // Do these need to be page transition or should these just be transitions on load and outside of Layout?
      <PageTransition duration={duration}>
        <Transition in={this.state.in} timeout={1000}>
          {state => <Page transitionState={state}>{this.props.children}</Page>}
        </Transition>
      </PageTransition>
    )
  }
}

const Page = styled.div`
  height: 650px;
  background-color: lightgrey;
  ${breakpoint("sm")`
  transition: left ${duration}ms ease-in-out;
    left: 50%;
    position: relative;
    box-shadow: -20px 26px 2px 7px rgba(0, 0, 255, 0.2);
    width: 90%;
    margin: 0 auto;
    left: ${({ transitionState }) =>
      transitionState === "entering" || transitionState === "entered"
        ? "0"
        : {}};
        margin-top: -50px;
  `}

  ${breakpoint("md")`
    left: 50%;
    min-width: 700px;
    width: 80%;
    left: ${({ transitionState }) =>
      transitionState === "entering" || transitionState === "entered"
        ? "0"
        : {}};
  `}

  ${breakpoint("xl")`
  width: 100%;
  min-width: 900px;
  margin: 50px 30px;
  margin-top: 0;
  padding: 50px;
    left: ${({ transitionState }) =>
      transitionState === "entering" || transitionState === "entered"
        ? "calc(-6% - 26px)"
        : {}};
    `}
  ${breakpoint("xxl")`
  max-width: 1100px;
  left: ${({ transitionState }) =>
    transitionState === "entering" || transitionState === "entered"
      ? "calc(-8% - 26px)"
      : {}};
    `}
`

export default AnimatedPage
