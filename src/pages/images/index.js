import React, { useState, useEffect } from 'react';
import Container from './styledContainer'
import { Form, Button, Image, Alert } from 'react-bootstrap';
import { postImage, delImage } from '../../helpers/imageBrandModelRequests'
import { useParams, useHistory } from 'react-router-dom';
import { getOne } from '../../helpers/carRequests'
import { eventErrHandler } from "../../helpers";
import { resizeImage } from '../../helpers/resizeImage';

export default () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [validation, setValidation] = useState(false);


  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getOne(id, (car) => {
      const arr = [];
        car.images.map(image => {
          return arr.push({ 'href': image })
        })
        setSelectedFiles(arr)
    });
    return () => setSelectedFiles([])
  }, [id]);

  const handleChange = async (files) => {
    const fileArr = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        setValidation('Please select valid image.');
      } else if (file.size > 1000000) {
        const image = await resizeImage(file)
        file = image
        setValidation(false)
      } else {
        setValidation(false);
      }
      fileArr.push({ file, href: URL.createObjectURL(file) })
    }
    setSelectedFiles([...selectedFiles, ...fileArr])
  }

  const handleClick = (e) => {
    
    const data = new FormData()
    selectedFiles.map(fileObj => {
      if (fileObj.file) {
        return data.append('file', fileObj.file)  
      }
      return fileObj
    })
    postImage(id, data, () => history.push(`/admin`))
  }

  const handleDelClick = (e) => {
    const href = e.target.previousSibling.src;
    delImage(id, { name: href }, setSelectedFiles)
  }

  const imageReview = selectedFiles.length > 0 ? validation ?
        <Alert variant='danger' >{validation}</Alert>
      :
      selectedFiles.map((fileObj, index) => {
        return (<div key={index} className='imgCont'>
          <Image src={fileObj.href} alt='car' rounded />
          <Button onClick={handleDelClick}>X</Button>
          </div>)
      })
      : 
      <div>No images</div>
    
  

  return (
    <Container>
      <Form>
        <div className="form-group files">
          <Form.Label>Качване на файлове</Form.Label>
          <Form.Control accept=".png, .jpg, .jpeg" onChange={e => eventErrHandler(() => handleChange(e.target.files))} type="file" className="form-control" multiple />
        </div>
      </Form>
      <div className='imageReview'>{imageReview}</div>
      <Button onClick={e => eventErrHandler(() => handleClick(e))}>Качи файловете</Button>
    </Container>
  )
}
