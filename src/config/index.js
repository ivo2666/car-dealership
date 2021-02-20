const server = 'http://localhost:9999/api'

const urls = {

login: `${server}/user/login`,
verify: `${server}/user/verify`,
getBrands: `${server}/brands`,
getModels: `${server}/models`,
postCar: `${server}/cars`,
putCar: `${server}/cars`,
postImage: `${server}/uploadImage`,
getCars: `${server}/cars`,
getCar: `${server}/cars`
}

export default urls 