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

 function getBrands(cb) {
   myFetch(urls.getBrands, cb)
 }

 function getModels(brand, cb, obj) {
   myFetch(`${urls.getModels}/${brand}`, cb, obj)
 }

 export { postImage, getBrands, getModels }