import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageUploadForm from './ImageUploadForm'

function App() {
  const [image, setImage] = useState("https://img.freepik.com/premium-vector/free-vector-user-icon-simple-line_901408-588.jpg");

  const handleShow = () => {
    fetch('http://localhost:3000/items/1.json', {
      method: 'GET'
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((jsonData) => {
      console.log(jsonData.item.image)
      setImage(jsonData.item.image)

    })
    .catch((error) => console.error('Fetch error:', error));

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
