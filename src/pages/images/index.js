import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Form, Button } from 'react-bootstrap';
import getCookie from '../../helpers/cookie';
import url from '../../config'

const Container = styled.div`
.files input {
    outline: 2px dashed #92b0b3;
    outline-offset: -10px;
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear;
    padding: 120px 0px 85px 35%;
    text-align: center !important;
    margin: 0;
    width: 100% !important;
}
.files input:focus{     outline: 2px dashed #92b0b3;  outline-offset: -10px;
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear; border:1px solid #92b0b3;
 }
.files{ position:relative}
.files:after {  pointer-events: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 50px;
    right: 0;
    height: 56px;
    content: "";
    background-image: url('https://image.flaticon.com/icons/png/128/109/109612.png');
    display: block;
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
}
.color input{
   background-color:#f1f1f1;
   }
.files:before {
    position: absolute;
    bottom: 10px;
    left: 0;  pointer-events: none;
    width: 100%;
    right: 0;
    height: 57px;
    content: " or drag it here. ";
    display: block;
    margin: 0 auto;
    color: #2ea591;
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
}
  `

export default () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const params = useParams()

  const handleChange = (files) => {
    const fileArr = [];
for (let i = 0; i < files.length; i++) {
  const file = files[i];
  fileArr.push(file)
}
    setSelectedFile(fileArr)
    console.log(fileArr)
    console.log(params.id)
  }

  const handleClick = (e) => {
    const data = new FormData()

    data.append('file', selectedFile)

    fetch(url.postImage, {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': getCookie('x-auth-token')
      }
    })
      .then(x => x.json())
      .then(x => console.log(x))
      .catch(err => console.log(err))
  }
const imageReview = () => {
  if (selectedFile.length > 0) {
   return selectedFile.map(image => {
     console.log(image);
     return <img src={image.name} alt='car' key={image.name}/>
   })   
  }
}
  


  return (
    <Container>
    <Form>
      
    <div className="form-group files">
                <Form.Label>Качване на файлове</Form.Label>
                
                <Form.Control onChange={e => handleChange(e.target.files)} type="file" className="form-control" multiple />
              </div>
    </Form>
    {imageReview()}
    <Button onClick={handleClick} >Качи файловете</Button>
    </Container>
  )
}
