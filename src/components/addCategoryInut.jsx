import { useState } from "react";

export const AddCategoryInput = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('One Punch ');
        const onInputChange = ({target}) =>{// opcional en ves de {target} solo e que obtiene el evento completo y no solo el target sin llaves
        // console.log();
        // console.log(e.target.value);
        setinputValue(target.value);
    }

    const onSubmit = (e) => {
        // cuando presiono enter se sube
        e.preventDefault();
        // console.log(inputValue);
        onNewCategory(inputValue);
        // setCategories((categories)=> [inputValue, ...categories]);

    }
    return (
    <form onSubmit={onSubmit}>
        <input type="text" 
                   placeholder="ingrese un valor"
                   value={inputValue}
                   onChange={onInputChange}>                    
                   </input>
    </form>);
}