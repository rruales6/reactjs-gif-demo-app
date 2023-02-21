import { useState } from "react";
import { AddCategoryInput ,GiftGrid} from "./components";



export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch ']);
    // var category = '';
    // console.log(categories);
    const onAddCategory = (category)=> {
        //categories.push(category); no recomendado
        // const category ='dragon ball';
        console.log(category);
         setCategories([...categories, category]);
    };  

    return (
    <>
        <h1>
            Gift expert app
        </h1>
        
        <AddCategoryInput 
        /* emito un evento al hijo */
        // setCategories = {setCategories}
        //pasando como referencia la funcion que actualiza  
        onNewCategory = {(value) => onAddCategory(value)}
        >
        </AddCategoryInput>
        {/* <input type="text" value={category}></input> */}
        {/* <button onClick={onAddCategory}>Add category</button> */}
        {/* <ol>
            {categories.map(category => (<li key={category}>{category}</li>))}
        </ol> */}
        {categories.map((category)=> <GiftGrid key={category} category={category}></GiftGrid>)}
    </>);
};