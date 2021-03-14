import React, {useContext ,useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from '../../contexts'; 
import authenticate from '../../helpers/auhtenticate';
import { useHistory } from "react-router-dom"
import Container from './styledCont'
import Field from '../../components/field'
import urls from '../../config'
import { eventErrHandler } from "../../helpers";

export default () => {
  const [user, setUser] = useState({
    username: '', 
    password: ''
  })
  const [validation, setValidation] = useState(false)
  const context = useContext(UserContext);
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()

    await authenticate(urls.login,
     user, 
    (user) => {
        context.logIn(user)
        history.push('/admin')
      }, (e) => {
        if (e.message === 'Failed to fetch') {
          setValidation('Няма връзка със сървъра')
        }else{
          setValidation(e.message)
        }
      }
    )
  }

  const handleChange = (field) => {
    setUser({ ...user, ...field })
  }

    return(
          <Container>
          <Form onSubmit={e => eventErrHandler(() => handleSubmit(e))}>
          <Field
          name='username'
          value={user.username}
          onChange={handleChange}
          label="Username"
          placeholder="Username"
/>
          <Field
          name='password'
          password='password'
          value={user.password}
          onChange={handleChange}
          label="Password"
          placeholder="password"
/>
{validation ? <Alert variant='danger'>{validation}</Alert> : <></>}
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
        </Container>
    )
}