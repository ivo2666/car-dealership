import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipe} from 'react-photoswipe';
import styled from 'styled-components';

const MyPhotoSwipe = styled(PhotoSwipe)`
.pswp__bg {
    opacity: 0.8 !important;
}

`
 
//let isOpen = true;
 

 
//let options = {
  //http://photoswipe.com/documentation/options.html
//};
 
//handleClose = () => {
//  isOpen: false
//};
 
//<PhotoSwipe isOpen={isOpen} items={items} options={options} onClose={handleClose}/>

export default MyPhotoSwipe
