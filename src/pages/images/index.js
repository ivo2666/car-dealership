import React, { useState, useEffect } from 'react';
import Container from './styledContainer'
import { Form, Button, Image, Alert } from 'react-bootstrap';
import { postImage } from '../../helpers/imageBrandModelRequests'
import { useParams, useHistory } from 'react-router-dom';
import { getOne } from '../../helpers/carRequests'
import { eventErrHandler } from "../../helpers";
import { resizeImage } from '../../helpers/resizeImage';
//import Del from "./deleteImageComp";

export default () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [validation, setValidation] = useState(false);


  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getOne(id, (car) => {
      if (car.images.length > 0) {
        const arr = [];
        car.images.map(image => {
          return arr.push({ 'href': image })
        })
        setSelectedFiles(arr)
      }
      return
    });
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
    if (!selectedFiles[0].file) {
      history.push(`/admin`)
      return
    }
    const data = new FormData()
    selectedFiles.map(fileObj => {
      return data.append('file', fileObj.file)
    })
    postImage(id, data, () => history.push(`/admin`))
  }

  const handleDelClick = (e) => {
    const index = Number(e.target.id);
    const array = selectedFiles
    array.splice(index, 1)
    setSelectedFiles([...array])
  }

  const imageReview = () => {
    if (selectedFiles.length > 0) {
      if (validation) {
        return <Alert variant='danger' >{validation}</Alert>
      }
      return selectedFiles.map((fileObj, index) => {
        return (<div key={index} className='imgCont'>
          <Image src={fileObj.href} alt='car' rounded />
          <Button onClick={e => eventErrHandler(() => handleDelClick(e))} id={index} >X</Button>
          </div>)
      })
    }
  }

  return (
    <Container>
      <Form>
        <div className="form-group files">
          <Form.Label>Качване на файлове</Form.Label>
          <Form.Control accept=".png, .jpg, .jpeg" onChange={e => eventErrHandler(() => handleChange(e.target.files))} type="file" className="form-control" multiple />
        </div>
      </Form>
      <div className='imageReview'>{imageReview()}</div>
      <Button onClick={e => eventErrHandler(() => handleClick(e))} >Качи файловете</Button>
    </Container>
  )
}
