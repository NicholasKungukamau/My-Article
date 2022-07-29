import React, { useReducer, useState,  useEffect, createContext } from "react"
import { createRoot } from "react-dom/client"

import Sidebar from "./components/Sidebar"
import MainArea from "./components/MainArea"
import Footer from "./components/Footer"

import OurContext from "./OurContext"
import DispatchContext from "./DispatchContext"
import RandomArticle from "./RandomArticle"



function ourReducerFunction(state, action) {
  switch (action.type) {
    case "incrementLikes":
      return { ...state, likeCount: state.likeCount + 1 }
    case "changeSize":
      return { ...state, size: action.value }
    case "changeColor":
      return { ...state, color: action.value }
    case "changeColorAndSize":
      return { ...state, color: action.value.color, size: action.value.size }
  }
}

const initialState = {
  size: 25,
  color: "blue",
  likeCount: 0
}

function App() {
  const [state, dispatch] = useReducer(ourReducerFunction, initialState)


  return (
      <DispatchContext.Provider value={dispatch}>
        <OurContext.Provider value={state}>
          <div className="grid-parent">
            <div className="header">
              <h1>Welcome To My App </h1> <marquee width = "18%"  scrollamount ="15" direction = "right" bgcolor="magenta" > <i className="intro">Don't be a writer. Be writing!!</i></marquee>
              <p>
                The current size is <strong>{state.size} </strong> and the current color is <strong>{state.color}</strong>.
              </p>
              <p>
                This page has been liked <strong>{state.likeCount}</strong> times.
              </p>

            </div>
            <Sidebar />
            <MainArea />
            <Footer />
            <RandomArticle />
          </div>
        </OurContext.Provider>
      </DispatchContext.Provider>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
