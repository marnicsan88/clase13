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
        loading?<Loading/>:<ItemList data={items}/>
    )
}

export default ItemListContainer