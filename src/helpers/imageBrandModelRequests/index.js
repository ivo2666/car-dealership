import urls from '../../config'
import getCookie from '../cookie'
import myFetch from '../myFetch'

 function postImage (id, data, cb) {
   myFetch(`${urls.postImage}/${id}`, cb, {
    method: 'POST',
    body: data,
    headers: {
      'Authorization': getCookie('x-auth-token')
    }
  })
 }

 function delImage (id, data, cb) {
   myFetch(`${urls.delImage}/${id}`, cb, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Authorization': getCookie('x-auth-token'),
      'Content-type': 'application/json'
    }
  })
 }

async function getBrands(cb) {
   await myFetch(urls.getBrands, cb)
 }

 function getModels(brand, cb, obj) {
   myFetch(`${urls.getModels}/${brand}`, cb, obj)
 }

 export { postImage, getBrands, getModels, delImage }