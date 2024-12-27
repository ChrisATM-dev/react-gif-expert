
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export default function useFetchGifs(category) {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getNewGifs = async () => {
        const newGifs = await getGifs(category); // la funcion retorna una lista de objetos {id, title, url}
        setGifs(newGifs);
        setIsLoading(false);
    }

    useEffect(()=>{
        getNewGifs();
    },[]);


    return {
        gifs, // es lo mismo que gifs: gifs
        isLoading // es lomismo que isLoading: isLoading
    }
}
