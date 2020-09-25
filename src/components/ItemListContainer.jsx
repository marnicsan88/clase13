import React, {useState, useEffect} from 'react';

import Loading from './Loading';
import ItemList from './ItemList';
import {Container, Row} from 'reactstrap';

function ItemListContainer(){
    const [items,setItems] = useState([]);
    const [loading,isLoading] = useState(true);

    useEffect(() => {
        setTimeout( () => {
            fetch('https://5f6a9065d808b90016bc1301.mockapi.io/spellmarketapi/v1/spell/')
            .then(res => {
                return res.json();
            }).then(res => {
                setItems(res);
                isLoading(false)
            })
        },2000)
    },[])

    return(
        <Container fluid={true}>
            <Row xs="1" sm="2" md="3" lg="4" className="justify-content-md-center" style={{textAlign:"center"}}>
                {loading?<Loading />:<ItemList data={items}/>}
            </Row>
        </Container>
    )
}

export default ItemListContainer