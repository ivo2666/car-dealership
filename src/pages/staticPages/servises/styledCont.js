import styled from 'styled-components'
import urls from '../../../config'

export default styled.main`
//min-height: 550px;
background: #212121;
background-image: url(${`${urls.server}/Bugatti-Chiron.jpg`});
background-size: cover;
background-repeat: no-repeat;
background-position: bottom center;

//display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    .row {
        justify-content: center;
    }

`