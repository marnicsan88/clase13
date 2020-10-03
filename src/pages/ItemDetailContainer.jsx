import React, {useState,useEffect} from 'react';
import Loading from '../components/loading/Loading';
import ItemDetail from '../components/ItemDetail';
import ErrorMsg from '../components/ErrorMsg';
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
        }).catch(err =>{
            console.log("ERROR " + err);
        })
    },[idItem])

    return(
        item === undefined?<ErrorMsg msg="No se encontró Spell"/>:
        <Container fluid>
            <Row style={{textAlign:"center"}}>
                <Col style={{display:"flex",justifyContent:"center"}}>
                    {loading?<Loading />:<ItemDetail item={item}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetailContainer;