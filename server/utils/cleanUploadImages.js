module.exports = (models, id, fs, next) => {
    return models.Cars.findById({ _id: id })
    .then((removedcars) => {
        removedcars.images.map(image => {
            const arr = image.split('/uploadImages/')
            const path = `${process.cwd()}/uploadImages/${arr[1]}` 
            return fs.unlink(path, (err) => {
                if (err) {
                  console.error(err)
                  return
                }
            })
        })
    })
    .catch(next)
}


