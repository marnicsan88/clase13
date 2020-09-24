import React from 'react';
import ItemList from '../components/ItemList';

const Home = (props) => {
    return (
        <div className="container-fluid">
            <div style={{textAlign:"center"}}>
                {props.greeting} <label style={{fontWeight:"bolder"}}>{props.nombre}</label>
            </div>
            <div>
                <ItemList />
            </div>
        </div>
    );
  }
  
  export default Home;