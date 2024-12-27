import { useState } from "react";

import {AddCategory, GifGrid} from "./components";




export default function GifEExpertApp() {

    const [ categories, setCategories ] = useState([]);

    const onAddCategory = (category) => {

        if(categories.includes(category)) return;

        setCategories([category, ...categories])
    }


  return (
    <>
        {/* Titúlo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
            <AddCategory setCategories={setCategories} onAddCategory={onAddCategory}/>

        {/* Lista de gif */}
            
            {
                categories.map((category)=> (
                    <GifGrid 
                        key={category} 
                        category={category}/>
                ))
            }
            
            {/* Gif Item */}

    </>
  )
}
