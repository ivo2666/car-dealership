import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import getCookie from '../../helpers/cookie';
import url from '../../config'

export default () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (file) => {
    setSelectedFile(file)
    console.log(file)
  }

  const handleClick = (e) => {
    var data = new FormData()
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


  return (
    <Form>
      <div className="mb-3">
        <Form.File id="formcheck-api-custom" custom>
          <Form.File.Input isValid onChange={e => handleChange(e.target.files[0])} />
          <Form.File.Label data-browse="Button text">
            Custom file input
          </Form.File.Label>
          <Form.Control.Feedback type="valid">You didasasasdasd it!</Form.Control.Feedback>
        </Form.File>
        <Button onClick={handleClick}>качи</Button>
      </div>
    </Form>
  )
}
