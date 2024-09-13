import {createContext, useReducer} from 'react'

export const ProductsContext = createContext()

export const productsReducer= (state) =>{

}

export const ProductsConextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, {
        products : null
    })


    return(
        <ProductsContext.Provider >
            {children}
        </ProductsContext.Provider>
    )
}