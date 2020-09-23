import React, {useState,useEffect} from 'react';
import Loading from '../components/Loading';
import ItemDetail from '../components/ItemDetail';
import {Container, Row, Col} from 'reactstrap';

const ItemDetailContainer = () => {
    const [item,setItem] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setTimeout( () => {
            //fetch('https://www.potterapi.com/v1/spells?key=$2a$10$7xU4.miW1yos8qelI076AuKwOyM8OQY2BILKHy4qDwSRa.CLM5nA.')
            fetch('https://5f6a9065d808b90016bc1301.mockapi.io/spellmarketapi/v1/spell/5b74ede13228320021ab6236')
            .then(res => {
                return res.json();
            }).then(res => {
                setItem(res);
                setLoading(false)
            })
        },3000)
    },[])

    /*useEffect(() => {
        setLoading(false)
        console.log(item)
    },[item])*/

    return(
        <Container fluid>
            <Row className="justify-content-md-center" style={{textAlign:"center"}}>
                <Col>
                    {loading?<Loading />:<ItemDetail item={item}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetailContainer;