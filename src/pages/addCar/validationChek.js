export default function (data) {
    let err = false;
  
    for (const [key, value] of Object.entries(data)) {
      if (value === '' || value === undefined) {
        err = `Полето ${key} не е попълнено!`
      } else if (key === 'km' || key === 'price' || key === 'birdayYear' || key === 'power'){
        if (isNaN(value)) {
          err = `Полето ${key} трябва да бъде число!`
        }
       
      }
    }
    if (err) {
      return err
    }
  
  }