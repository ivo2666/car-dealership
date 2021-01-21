import React, { useState } from 'react';
import Container from './styledContainer'
import { Form, Button, Image, Alert } from 'react-bootstrap';
import getCookie from '../../helpers/cookie';
import urls from '../../config'
import { useParams, useHistory } from 'react-router-dom';


export default () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [validation, setValidation] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  const handleChange = (files) => {
    const fileArr = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        setValidation('Please select valid image.');
      }else if (file.size > 1240000) {
        setValidation('Някой от файловете е прекалено голям!')
      }else {
        setValidation(false);
      }
      fileArr.push({ file, href: URL.createObjectURL(file) })
    }
    setSelectedFiles(fileArr)
  }

  const handleClick = (e) => {
    const data = new FormData()
//console.log(selectedFiles);
    selectedFiles.map(fileObj => {
      return data.append('file', fileObj.file)
    })
  //  console.log(data);
    fetch(`${urls.postImage}/${id}`, {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': getCookie('x-auth-token')
      }
    })
      .then(x => x.json())
      .then(x => history.push(`/admin`))
      .catch(err => console.log(err))
  }
  const imageReview = () => {
    if (selectedFiles.length > 0) {
      if (validation) {
        return <Alert variant='danger' >{validation}</Alert>
      }
      return selectedFiles.map(fileObj => {
        return <Image src={fileObj.href} alt='car' rounded key={fileObj.file.name} />
      })
    }
  }



  return (
    <Container>
      <Form>
        <div className="form-group files">
          <Form.Label>Качване на файлове</Form.Label>
          <Form.Control accept=".png, .jpg, .jpeg" onChange={e => handleChange(e.target.files)} type="file" className="form-control" multiple />
        </div>
      </Form>
      <div className='imageReview'>{imageReview()}</div>
      <Button onClick={handleClick} >Качи файловете</Button>
    </Container>
  )
}
