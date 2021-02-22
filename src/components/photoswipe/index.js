import React, { useState, useEffect } from 'react';
import StyledPhotoswipe from './styledCont'
import  reactImageSize  from 'react-image-size';

export default ({isOpen, items, options, onClose}) => {
  const [modItems, setModItems] = useState([])

  useEffect(() => {
    const changeData = async (data, cb) => {
      const newArr = []
      await data.map(async (item, index) => {
        try {
          const { width, height } = await reactImageSize(item);
           return newArr.push({
            src: item,
            w: width,
            h: height,
            title: index
          })
        } catch(err) {
          console.log(err);
        }})
        cb(newArr)
    }
    changeData(items, setModItems)  
  }, [items])

  
  return (
    
<StyledPhotoswipe isOpen={isOpen} items={modItems} options={options} onClose={onClose}/>
  )
}
