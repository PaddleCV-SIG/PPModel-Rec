import React from "react"
import "./App.css"
import Header from "./components/header"
import InputForm from "./components/inputForm"
import OutputForm from "./components/outputForm"

const App = () => (
  <div className="App">
    <Header />
    
    <div className="pp-input-form">
      <InputForm />
      <OutputForm />
    </div>
  </div>
)

export default App
