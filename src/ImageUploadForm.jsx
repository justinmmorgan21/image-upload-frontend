import React, { useState } from 'react';
import axios from 'axios';
const ImageUploadForm = () => {
  const [image, setImage] = useState({});
  
  const handleChange = e => {
    e.persist();
    setImage(e.target.files[0]);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    const params = new FormData();
    params.append('image', image);

    axios.post("http://localhost:3000/items", params).then(response => {
      console.log(response.data)
    })
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Image upload</label>
        <input type="file" name="image" onChange={handleChange} />
    
        <input type="submit" />
      </form>
    </div>
  )
};

export default ImageUploadForm;