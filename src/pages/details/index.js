import React from 'react';
import Container from './styledContainer';
import Layout from '../../components/pageLayout'
import Slideshow from '../../components/detailsSlideshow'
import { Title, CarTable, Description, Extras } from '../../components/detailsPageComps'
import { getCar } from '../../helpers';
import { useParams } from 'react-router-dom';

//const cloudinaryUpload = (file, preset) => {
//    const formData = new FormData();
//formData.append("file", file);
//formData.append("upload_preset", preset)
//fetch('https://api.cloudinary.com/v1_1/retro-cars/image/upload',{
//    method: 'POST',
//    body: formData
//})
//.then( x => x.json())
//.then(data => console.log(data))    
//}

//cloudinaryUpload('https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', 'clientCars')


export default () => {
    const [car, setCar] = React.useState({});
    const { id } = useParams()
    
    React.useEffect(() => {
        
        getCar(id, setCar)
    }, [id])



    return(
    <Layout>
        <Container>
            <h1>{`${car.brand} ${car.model}`}</h1>
<Slideshow images={car.images ? car.images : []}/>
<Title>Допълнителна нформация</Title>
<CarTable car={car}/>
<Title>Екстри</Title>
<Extras extras={car.extras ? car.extras : []}/>
<Title>Описание</Title>
<Description>{car.description}</Description>
        </Container>
    </Layout>
)}