import React from "react"
import PageTransition from "gatsby-plugin-page-transitions"
import Transition from "react-transition-group/Transition"

const pageTransitionEvent = "gatsby-plugin-page-transition::exit"
const duration = 300

const defaultStyle = {
  position: "relative",
  transition: `left ${duration}ms ease-in-out`,
  left: "-50%",
}

const transitionStyles = {
  entering: { left: 0 },
  entered: { left: 0 },
  exiting: { left: "50%" },
  exited: { left: "50%" },
}

class Slide extends React.Component {
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
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {this.props.children}
            </div>
          )}
        </Transition>
      </PageTransition>
    )
  }
}

export default Slide
