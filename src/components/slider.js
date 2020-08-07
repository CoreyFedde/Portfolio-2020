import React from "react"
import styled from "styled-components"
import _ from "lodash"
import ReactDOM from "react-dom"

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { position: 1, lastScroll: 0 }
    this.scrollWindow = React.createRef()
    // Any scroll within 5000 ms counts as 1
    this.throttled = _.throttle(e => this.handleScroll(e), 5000, {
      trailing: true,
    })
  }

  // Add in logic for gesture change

  componentDidMount() {
    console.log("mounted")
    window.addEventListener("wheel", this.throttled)
    // window.addEventListener("gesturechange", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.throttled)
    // window.removeEventListener("gesturechange", this.handleScroll)
  }

  handleScroll = e => {
    if (e.wheelDelta > 0) {
      this.positionLeft()
    } else if (e.wheelDelta < 0) {
      this.positionRight()
    }
  }

  renderBoxes = children => {
    const styledChildren = children.map((b, i) => {
      const placement = i * 450
      return React.cloneElement(b, {
        style: { left: placement - this.state.position * 450 },
      })
    })
    return styledChildren
  }

  positionLeft = scrollValue => {
    this.setState(
      this.state.position !== 4
        ? { position: this.state.position + 1, lastScroll: scrollValue }
        : { position: 4, lastScroll: scrollValue }
    )
    // Change state, wait 500 ms, and then cancel the remaining scrolls and reset function
    _.delay(this.throttled.cancel, 500)
  }

  positionRight = scrollValue => {
    this.setState(
      this.state.position !== 0
        ? { position: this.state.position - 1, lastScroll: scrollValue }
        : { position: 0, lastScroll: scrollValue }
    )
    _.delay(this.throttled.cancel, 500)
  }
  render() {
    return (
      <SlideWrap>
        <button
          onClick={this.positionRight}
          style={{ position: "absolute", top: "450px" }}
        >
          Right
        </button>
        {this.renderBoxes(this.props.children)}
        <button
          onClick={this.positionLeft}
          style={{ position: "absolute", top: "400px" }}
        >
          Left
        </button>
      </SlideWrap>
    )
  }
}

export default Slider

const SlideWrap = styled.div`
  position: absolute;
  top: 0;
`

export const Box = styled.div`
  box-shadow: -20px 26px 2px 7px rgba(0, 0, 255, 0.2);
  background: white;
  display: inline-block;
  width: 400px;
  height: 400px;
  border: 1px solid black;
  position: absolute;
  transition: left 1s;
`

// console.clear();

// const slides = [
//   {
//     title: "Machu Picchu",
//     subtitle: "Peru",
//     description: "Adventure is never far away",
//     image:
//       "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Chamonix",
//     subtitle: "France",
//     description: "Let your dreams come true",
//     image:
//       "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Mimisa Rocks",
//     subtitle: "Australia",
//     description: "A piece of heaven",
//     image:
//       "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Four",
//     subtitle: "Australia",
//     description: "A piece of heaven",
//     image:
//       "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Five",
//     subtitle: "Australia",
//     description: "A piece of heaven",
//     image:
//       "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   }
// ];

// function useTilt(active) {
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     if (!ref.current || !active) {
//       return;
//     }

//     const state = {
//       rect: undefined,
//       mouseX: undefined,
//       mouseY: undefined
//     };

//     let el = ref.current;

//     const handleMouseMove = (e) => {
//       if (!el) {
//         return;
//       }
//       if (!state.rect) {
//         state.rect = el.getBoundingClientRect();
//       }
//       state.mouseX = e.clientX;
//       state.mouseY = e.clientY;
//       const px = (state.mouseX - state.rect.left) / state.rect.width;
//       const py = (state.mouseY - state.rect.top) / state.rect.height;

//       el.style.setProperty("--px", px);
//       el.style.setProperty("--py", py);
//     };

//     el.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       el.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [active]);

//   return ref;
// }

// const initialState = {
//   slideIndex: 0
// };

// const slidesReducer = (state, event) => {
//   if (event.type === "NEXT") {
//     return {
//       ...state,
//       slideIndex: (state.slideIndex + 1) % slides.length
//     };
//   }
//   if (event.type === "PREV") {
//     return {
//       ...state,
//       slideIndex:
//         state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
//     };
//   }
// };

// function Slide({ slide, offset }) {
//   const active = offset === 0 ? true : null;
//   const ref = useTilt(active);

//   return (
//     <div
//       ref={ref}
//       className="slide"
//       data-active={active}
//       style={{
//         "--offset": offset,
//         "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
//       }}
//     >
//       <div
//         className="slideBackground"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       />
//       <div
//         className="slideContent"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       >
//         <div className="slideContentInner">
//           <h2 className="slideTitle">{slide.title}</h2>
//           <h3 className="slideSubtitle">{slide.subtitle}</h3>
//           <p className="slideDescription">{slide.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [state, dispatch] = React.useReducer(slidesReducer, initialState);

//   return (
//     <div className="slides">
//       <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

//       {[...slides, ...slides, ...slides].map((slide, i) => {
//         let offset = slides.length + (state.slideIndex - i);
//         return <Slide slide={slide} offset={offset} key={i} />;
//       })}
//       <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
//     </div>
//   );
// }

// const elApp = document.getElementById("app");
// ReactDOM.render(<App />, elApp);
