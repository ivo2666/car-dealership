const server = 'http://localhost:9999'

const urls = {
server: server,
login: `${server}/api/user/login`,
verify: `${server}/api/user/verify`,
getBrands: `${server}/api/brands`,
getModels: `${server}/api/models`,
postCar: `${server}/api/cars`,
putCar: `${server}/api/cars`,
postImage: `${server}/api/uploadImage`,
getCars: `${server}/api/cars`,
getCar: `${server}/api/cars`
}

export default urls 