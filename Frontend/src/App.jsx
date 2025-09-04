import { useState } from 'react'
import './App.css'
import Shortener from './components/Shortener'

//creating a url shortenner app
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shortener />} />
      </Routes>
    </Router>
  )

}

export default App
