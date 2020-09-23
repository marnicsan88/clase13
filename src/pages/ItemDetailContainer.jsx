import React, {useState,useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';
import {Container, Row, Col} from 'reactstrap';

const ItemDetailContainer = () => {
    const [item,setItem] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        //fetch('https://www.potterapi.com/v1/spells?key=$2a$10$7xU4.miW1yos8qelI076AuKwOyM8OQY2BILKHy4qDwSRa.CLM5nA.')
        fetch('https://5f6a9065d808b90016bc1301.mockapi.io/spellmarketapi/v1/spell/5b74ede13228320021ab6236')
        .then(res => {return res.json();}
        ).then(res => {
            setItem(res);
        })
    },[])

    useEffect(() => {
        setLoading(false)
        console.log(item)
    },[item])

    if(loading){
        return(
            <div>CARGANDO!</div>
        )
    }
    return(
        <Container fluid={true}>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <ItemDetail item={item}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetailContainer;