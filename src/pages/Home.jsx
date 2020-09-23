import React from 'react';
import Counter from '../components/CounterClass';
import Counter2 from '../components/CounterFunction';
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