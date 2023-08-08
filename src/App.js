import React from 'react'

function Hello(props){
  return(
    <p>Hello {props.name}, you are {props.age} years old.</p>
  )
}

function App() {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = 'Aravindh' age = {26}/>
    </div>
  )
}

export default App