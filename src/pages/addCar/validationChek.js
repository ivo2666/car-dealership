export default function (car) {
    let err = false;
    const bgData = {
      Марка: car.brand,
      Модел: car.model,
      Модификация: car.modification,
      Двигател: car.engine,
      Мощност: car.power,
      Евростандарт: car.eurostandart,
      'Скоростна кутия': car.gearbox,
      Категория: car.category,
      Цена: car.price,
      Пробег: car.km,
      'Дата на производство': car.birdayMonth,
      Година: car.birdayYear,
      Цвят: car.color,
      Описание: car.description
    };
  
    for (const [key, value] of Object.entries(bgData)) {
      if (value === '' || value === undefined) {
        err = `Полето ${key} не е попълнено!`
      } else if (key === 'Пробег' || key === 'Цена' || key === 'Година' || key === 'Мощност'){
        if (isNaN(value)) {
          err = `Полето ${key} трябва да бъде число!`
        }
       
      }
    }
    if (err) {
      return err
    }
  
  }