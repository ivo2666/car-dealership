import urls from '../../config'
import getCookie from '../cookie'
import myFetch from '../myFetch'

const headers = {
    'Content-Type': 'application/json',
    'Authorization': getCookie('x-auth-token')
  }

   const get = (callback) => {
        return myFetch(urls.getCars, callback);
    }

   const getOne = (id, callback) => {
        return myFetch(`${urls.getCar}/${id}`, callback)
    }

   const post = (data, callback) => {
        const postObj = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
          }
        return myFetch(urls.postCar, callback, postObj)
    }

   const put= (data, id, callback) => {
        const postObj = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: headers
          }
        return myFetch(`${urls.postCar}/${id}`, callback, postObj)
    }

   const delOne = (id, callback) => {
        const postObj = {
            method: 'DELETE',
            headers: headers
          }
        return myFetch(`${urls.postCar}/${id}`, callback, postObj)
    }

export { get, getOne, post, put, delOne }