import React from 'react';
import ItemListContainer from '../components/itemList/ItemListContainer';

const Home = (props) => {
    return (
        <div className="container-fluid">
            <div style={{textAlign:"center"}}>
                {props.greeting} <label style={{fontWeight:"bolder"}}>{props.nombre}</label>
            </div>
            <div>
                <ItemListContainer />
            </div>
        </div>
    );
  }
  
  export default Home;