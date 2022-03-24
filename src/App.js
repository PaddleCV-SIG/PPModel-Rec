import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import InputForm from './components/inputForm'
import OutputForm from './components/outputForm'

const App = () => {
  const [res, setRes] = useState([])

  return (
    <div className="App">
      <Header />

      <div className="pp-input-form">
        <InputForm setRes={setRes} />
        <OutputForm res={res} />
      </div>
    </div>
  )
}

export default App
