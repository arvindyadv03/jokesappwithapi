import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get("/api/api-jokes")
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        1
        console.log(error)
      })


  })

  return (
    <>

      <h1>Have a smile</h1>
      <p>Jokes: {jokes.length}</p>


      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
          </div>


        ))
      }

      <div style={{backgroundColor: "red", padding:"10px 30px", borderRadius: "20px"}}>
        <h1>This is a joke that make you laugh</h1>
        <h2>Did you laugh</h2>
      </div>
    </>
  )
}

export default App
