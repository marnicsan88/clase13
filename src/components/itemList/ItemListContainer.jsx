import React, {useState, useEffect} from 'react';
import Loading from '../loading/Loading';
import ItemList from './ItemList';
import {Container,Row} from 'reactstrap'
import {getFirestore} from '../../firebase';

function ItemListContainer(){
    const [items,setItems] = useState([]);
    const [loading,isLoading] = useState(true);

    /*CONSUMIENDO API CON FETCH
    useEffect(() => {
        fetch('https://5f6a9065d808b90016bc1301.mockapi.io/spellmarketapi/v1/spell/')
        .then(res => {
            return res.json();
        }).then(res => {
            setItems(res);
            isLoading(false)
        })
    },[])*/

    /*CONSUMIENDO FIREBASE*/
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("spells")
        itemCollection.get().then((querySnapshot) => {
            if(!querySnapshot.size){
                console.log("No Data");
            }
            setItems(querySnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            }))
        }).catch(error => {
            console.log("ERROR ",error)
        }).finally(
            () => {isLoading(false);
        });
    },[]);

    return(
        loading?<Loading/>:(
            <Container fluid={true}>
                <Row xs="1" sm="2" md="3" lg="4" className="justify-content-md-center" style={{textAlign:"center"}}>
                    <ItemList data={items}/>
                </Row>
            </Container>    
        )
    )
}

export default ItemListContainer