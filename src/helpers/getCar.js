import urls from '../config';

export default (id, setCar) => {
     fetch(`${urls.getCars}/details/${id}`,{
        method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
      })
      .then(x => x.json())
      .then(c => setCar(c))
      .catch(err => console.log(err))
    }