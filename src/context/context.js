import React, {useState} from 'react'

export const CartContext = React.createContext([]);

//Componente React que retorna un Provider con su valor englobando a todos los elemntos hijos que lo van consumir
export const CartProvider = (props) => {
    const[cart, setCart] = useState([]);

    //el value definido en value va a ser accesible por todos los elementos envueltos por el 
    //contexto, en este caso: los children
    return(
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}
