import React, {useState} from 'react';
import Item from './Item';
import {Container, Row, Col} from 'reactstrap';

function ItemList(){
    const [items,setItems] = useState([]);
    const [loading,isLoading] = useState(true);

    const getItems = new Promise((resolve,reject) => {
        setTimeout(()=>{
            const items = [{id:1,nombre:"Don Quijote de la Mancha",autor:"Miguel de Cervantes",precio:"$2.502,00",image:"https://via.placeholder.com/40x30.png"},
            {id:2,nombre:"Historia de dos ciudades",autor:"Charles Dickens",precio:"$910,00",image:"https://via.placeholder.com/40x30"},
            {id:3,nombre:"El Señor de los Anillos",autor:"J. R. R. Tolkien",precio:"$2.970,00",image:"https://via.placeholder.com/40x30.png"},
            {id:4,nombre:"El principito",autor:"Antoine de Saint-Exupéry",precio:"$389,00",image:"https://via.placeholder.com/40x30"},
            {id:5,nombre:"El hobbit",autor:"J. R. R. Tolkien",precio:"$940,00",image:"https://via.placeholder.com/40x30.png"},
            {id:6,nombre:"Sueño en el pabellón rojo",autor:"Cao Xueqin",precio:"$3.480,00",image:"https://via.placeholder.com/40x30"},
            {id:7,nombre:"Las aventuras de Alicia en el país de las maravillas",autor:"Lewis Carroll",precio:"$550,00",image:"https://via.placeholder.com/40x30.png"},
            {id:8,nombre:"Y no quedó ninguno (Diez negritos)",autor:"Agatha Christie",precio:"$800,00",image:"https://via.placeholder.com/40x30.png"},
            {id:9,nombre:"El león, la bruja y el armario",autor:"C. S. Lewis",precio:"$780,00",image:"https://via.placeholder.com/40x30"},
            {id:10,nombre:"Ella",autor:"H. Rider Haggard",precio:"$800,00",image:"https://via.placeholder.com/40x30"}]
            resolve(items)
        },2000)
    })

    getItems.then((result) => {
        setItems(result);
        isLoading(false);
    })

    if(loading){
        return(<div style={{height:"80vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <label style={{fontSize:"2rem"}}>Cargando....</label>
                </div>
        )
    }

    return(
        <Container fluid={true}>
            <Row xs="1" sm="2" md="3" lg="4">
                {items.map(item => <Col><Item key={item.id} nombre={item.nombre} autor={item.autor} precio={item.precio} image={item.image}/></Col>)}
            </Row>
        </Container>
    )
}

export default ItemList