import urls from '../config'
import getCookie from './cookie'

export default (data, method, id, history) => {
    return fetch( id ? `${urls.postCar}/${id}` : `${urls.postCar}`, {
        method: method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getCookie('x-auth-token')
        }
      })
      .then(promis => promis.json())
      .then(resCar => {
        const _id = id ? id : resCar._id;
        return history.push(`/addCar/extras/${_id}`)
      })
        .catch(err => console.log(err))
    
}
