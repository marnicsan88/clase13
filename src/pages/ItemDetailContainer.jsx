import React, {useState,useEffect} from 'react';
import Loading from '../components/loading/Loading';
import ItemDetail from '../components/ItemDetail';
import {Container, Row, Col} from 'reactstrap';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item,setItem] = useState([]);
    const [loading,setLoading] = useState(true);
    const {idItem} = useParams();
    useEffect(() => {
        fetch(`https://5f6a9065d808b90016bc1301.mockapi.io/spellmarketapi/v1/spell/${idItem}`)
        .then(res => {
            return res.json();
        }).then(res => {
            setItem(res);
            setLoading(false)
        })
    },[idItem])

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