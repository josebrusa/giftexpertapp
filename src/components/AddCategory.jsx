import { PropTypes } from "prop-types";
import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
            if( inputValue.trim().length <= 1) return;
            setInputValue('');
            onNewCategory( inputValue.trim() )
    }

    return (
        <form onSubmit={ onSubmit } >
            <input
                placeholder="busca tu gifs"
                type="text"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}

