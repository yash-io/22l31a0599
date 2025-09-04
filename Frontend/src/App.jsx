import { useState } from 'react'
import './App.css'
import Shortener from './components/Shortener'
import Redirect from './components/Redirect'

//creating a url shortenner app
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shortener />} />
        <Route path="/:code" element={<Redirect />} />
      </Routes>
    </Router>
  )

}

export default App
