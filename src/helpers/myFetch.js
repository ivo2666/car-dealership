export default async (url, callback, obj) => {
    try {
        let result
        let response
        if (obj) {
            response = await fetch(url, obj)
        }else {
            response = await fetch(url)
        }
        result = await response.json() 
            callback(result)
            return result
    } catch (err){ console.log(err) }
}