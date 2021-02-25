import React, {useContext ,useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import UserContext from '../../context'; 
import authenticate from '../../helpers/auhtenticate';
import { useHistory } from "react-router-dom"
import Container from './styledCont'
import Field from '../../components/field'
import PageLayout from '../../components/pageLayout';

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

    await authenticate('http://localhost:9999/api/user/login',
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
        <PageLayout>
          <Container>
          <Form onSubmit={handleSubmit}>
          <Field
          name='username'
          value={user.username}
          onChange={handleChange}
          label="Username"
          placeholder="Username"
/>
          <Field
          name='password'
          type='password'
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
        </PageLayout>
    )
}