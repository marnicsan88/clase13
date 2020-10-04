import React, {useState,useEffect} from 'react';
import Loading from '../components/loading/Loading';
import ItemDetail from '../components/ItemDetail';
import ErrorMsg from '../components/ErrorMsg';
import {Container, Row, Col} from 'reactstrap';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../firebase/index'

const ItemDetailContainer = () => {
    const {idItem} = useParams();
    const [item,setItem] = useState(false);
    const [loading,setLoading] = useState(true);

    /*useEffect(() => {
        fetch(`https://5f6a9065d808b90016bc1301.mockapi.io/spellmarketapi/v1/spell/${idItem}`)
        .then(res => {
            if(res.ok)
                return res.json();
            else
                throw new Error("No se encontró Spell")
        }).then(res => {
            setItem(res);
        }).catch(err =>{
            console.log(err);
        }).finally(() => setLoading(false))
    },[idItem])*/

    /*CONSUMIENDO FIREBASE*/
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("spells")
        const item = itemCollection.doc(idItem);
        item.get().then((doc) => {
            if(!doc.exists){
                console.log("No Data");
            }
            setItem(doc.data())
        }).catch(error => {
            console.log("ERROR ",error)
        }).finally(() => {
            setLoading(false);
        })
    },[]);

    return(
        loading ? <Loading /> : (
            <Container fluid>
                <Row style={{textAlign:"center"}}>
                    <Col style={{display:"flex",justifyContent:"center"}}>
                        {item ? <ItemDetail item={item}/> : <ErrorMsg msg="No se encontró Spell"/>}
                    </Col>
                </Row>
            </Container>
        )
    )
}

export default ItemDetailContainer;