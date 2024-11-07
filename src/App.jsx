import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageUploadForm from './ImageUploadForm'
import axios from 'axios'

function App() {
  const [image, setImage] = useState("https://img.freepik.com/premium-vector/free-vector-user-icon-simple-line_901408-588.jpg");

  const handleShow = () => {
    axios.get("http://localhost:3000/items/4.json")
    .then((response) => {
      console.log(response.data)
      setImage(response.data.item.image)
    })
  }

  return (
    <>
      <div>
        <ImageUploadForm />
        <button onClick={()=>handleShow()}>Show Image</button>
        <br />
        <img src={image} alt="" />
      </div>
    </>
  )
}

export default App
