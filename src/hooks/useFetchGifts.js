
import { useEffect, useState } from "react";

import { getGifts } from "../functions/GetGift";
export const useFetchGifts = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    // const getImages = async () => {
    //      setimages(await getGifts());
    // // await retorna el value que almacena la promesa si la tiene
    // }
// arreglo vacio en el parametro dependency de useefect significa que solo se ejecuta la primera vez q renderiza
//  y no cuando se redibuja
    useEffect(() => {
        // getImages()
        getGifts(category).then((images) =>{
            setimages(images);
            setisLoading(false);
        })
            .catch((error) => console.log(error));
    }, []);

    return ({
        images, isLoading
    }
    );
}
