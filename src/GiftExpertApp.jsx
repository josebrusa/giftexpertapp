import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon ball', 'evangelion']);

    const onAddCategory = ( newCategory ) => {
        
        if( categories.includes( newCategory )) return;
        
        // setCategories( cat => [ ...cat, 'valorant']);
        setCategories( [ newCategory,...categories ] );

    }

    return (
        <>
            {/* titulo */}
            <h1>Gift-Expert-App</h1>
            
            {/* Input */}

            {/* <AddCategory setCategories={ setCategories } /> */}
            <AddCategory
                onNewCategory={ ( value ) => onAddCategory( value ) }
            />

            {/* Listado de Gif */}
            <ol>
            {categories.map((category) => {
                return (
                    <li key={category}>{ category }</li>
                    )
            })
            }
            </ol>
                {/* gif item */}
        </>
    )
}

