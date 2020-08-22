import React from "react"
import styled from "styled-components"
import _ from "lodash"
import Transition from "react-transition-group/Transition"
import {
  Title,
  Description,
  TitleContainer,
} from "./TypographyStyledComponents"

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { position: 1, lastScroll: 0, in: false }
  }

  // Add in logic for gesture change
  //   Also logic for touch pad

  componentDidMount() {
    this.setState({
      in: true,
    })
    // console.log(document.getElementById("test").scrollTop)
    // const rect1 = document.getElementById("test").getBoundingClientRect()
    // const rect2 = document.getElementById("1").getBoundingClientRect()
    // let overlap = !(
    //   rect1.right < rect2.left ||
    //   rect1.left > rect2.right ||
    //   rect1.bottom < rect2.top ||
    //   rect1.top > rect2.bottom
    // )
    // if (overlap) {
    //   console.log("yikes")
    // }
    // let options = {
    //   root: document.querySelector("#test"),
    //   rootMargin: "0px",
    //   threshold: 0.4,
    // }
    // let observer = new IntersectionObserver(() => console.log("whoa"), options)
    // observer.observe(document.querySelector("#test-2"))
    // let observer = new IntersectionObserver(entries => {
    //   console.log("wow", entries)
    //   if (entries[0].boundingClientRect.y < 0) {
    //     console.log("Past 100px!")
    //   } else {
    //     console.log("Not past 100px")
    //   }
    // })
    // observer.observe(document.querySelector("#test"))
  }

  renderBoxes = (children, transitionState) => {
    const styledChildren = children.map((b, i) => {
      const placement = i * 450
      const id = `test-${i}`
      return React.cloneElement(b, {
        placement: placement,
        statePosition: this.state.position,
        active: this.state.position === i,
        transitionState,
        id,
      })
    })
    return styledChildren
  }

  render() {
    return (
      <Transition in={this.state.in} timeout={1000}>
        {state => (
          <SlideWrap transitionState={state}>
            <InvisiBox />
            {this.renderBoxes(this.props.children, state)}
            <InvisiBox />
          </SlideWrap>
        )}
      </Transition>
    )
  }
}

export default Slider

const SlideWrap = styled.div`
  //   left: 150%;
  //   transition: left 300ms ease-in-out 500ms;
  position: relative;
  //   bottom: 0;
  width: 500px;
  height: 1000px;
  position: absolute;
  left: calc(50% - 250px);
  top: calc(50% - 500px);
  overflow: scroll;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  //   margin: 100px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`

const WatchPixel = styled.div`
  //   position: absolute;
  width: 1px;
  height: 1px;
  top: 100px;
  left: 0;
`

export const Box = styled.div`
  //   opacity: 0;
  //   transition: opacity 10ms ease-in-out 500ms;
  // Can we have every card fly in?
  //   transition: left 300ms ease-in-out 1000ms;
  //   left: 50%;
  box-shadow: -20px 26px 2px 7px rgba(88, 163, 240, 0.2);
  background: #ffffff;
  display: inline-block;
  width: 400px;
  height: 400px;
  border: 1px solid black;
  margin: 100px 50px;
  scroll-snap-align: center;
  //   position: absolute;
  ${props =>
    props.url &&
    `background: url(${props.url}); background-size: cover; background-position: center;`};
  &::after {
    content: " - Remember this";
    background-color: yellow;
    color: red;
    font-weight: bold;
  }
`

export const InvisiBox = styled(Box)`
  width: 400px;
  height: 400px;
  background: transparent;
  border: none;
  box-shadow: none;
  scroll-snap-align: none;
  margin: 0;
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
