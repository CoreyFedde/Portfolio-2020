import React from "react"
import PageTransition from "gatsby-plugin-page-transitions"
import Transition from "react-transition-group/Transition"
import styled from "styled-components"

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
      <PageTransition duration={duration}>
        <Transition in={this.state.in} timeout={1000}>
          {state => <Page transitionState={state}>{this.props.children}</Page>}
        </Transition>
      </PageTransition>
    )
  }
}

const Page = styled.div`
  transition: left ${duration}ms ease-in-out;
  min-width: 900px;
  width: 100%;
  height: 650px;
  left: 50%;
  position: absolute;
  background-color: lightgrey;
  box-shadow: -20px 26px 2px 7px rgba(0, 0, 255, 0.2);
  margin: 50px 30px;
  padding: 50px;
  left: ${({ transitionState }) =>
    transitionState === "entering" || transitionState === "entered"
      ? "calc(-10% - 26px)"
      : {}};
`

export default AnimatedPage
