import React, { useState, useEffect } from 'react';
import StyledPhotoswipe from './styledCont'
import  probe  from 'probe-image-size';
import ErrorBoundary from '../../components/erorrBoundary'

export default ({isOpen, items, options, onClose}) => {
  const [modItems, setModItems] = useState([])

  useEffect(() => {
    const changeData = async (data, cb) => {
      const newArr = []
      await data.map(async (item, index) => {
        try {
          const { width, height } = await probe(item);
           return newArr.push({
            src: item,
            w: width + width,
            h: height + height,
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
    <ErrorBoundary>
<StyledPhotoswipe isOpen={isOpen} items={modItems} options={options} onClose={onClose}/>
</ErrorBoundary>
  )
}
