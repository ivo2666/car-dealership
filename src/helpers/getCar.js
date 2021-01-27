import urls from '../config';
import getCookie from '../helpers/cookie';

export default async (id, setCar) => {
     fetch(`${urls.getCars}/details/${id}`,{
        method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('x-auth-token')
    }
      })
      .then(x => x.json())
      .then(c => setCar(c))
      .catch(err => console.log(err))
    }