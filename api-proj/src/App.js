import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import MainPage from "./MainPage"
import GamePage from "./GamePage"

export default function App() {
  return (
<>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/GameModel/:id" element={<GamePage />} />
      </Routes>
    </Router>  
</>
  )
}
