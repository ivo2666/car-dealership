import styled from 'styled-components';

export default styled.div`
@media only screen and (max-width: 600px){
    height: 190px;
    width: 100%;
    .prev, .next {
        display: none;
    }
    
}
@media only screen and (min-width: 600px){
    height: 430px;
width: 700px;    
cursor: zoom-in;

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 38px;
  text-decoration: none;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  background-color: rgba(0,0,0,0.8);
  user-select: none;
  border-radius: 6px;
}

/* Position the "next button" to the right */
.next {
  right: 2%;
  //border-radius: 3px 0 0 3px;
}

.prev {
    left: 2%;
}


/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  
}
}
overflow: hidden;
display: flex;
justify-content: center;
position: relative;

img {
    height: 95%;
}
`