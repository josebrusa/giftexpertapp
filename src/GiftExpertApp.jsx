import { useState } from "react"

export const GiftExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon ball', 'evangelion']);

    const onAddCategory = () => {
        // setCategories( [...categories, 'los simpsons'] );
        setCategories( cat => [ ...cat, 'valorant'])
    }

    return (
        <>
            {/* titulo */}
            <h1>Gift-Expert-App</h1>
            
            {/* Input */}

            {/* Listado de Gif */}
            <button onClick={() => onAddCategory()}>Agregar</button>
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

