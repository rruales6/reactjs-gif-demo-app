

import { GiftCard } from "./GiftCard";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GiftGrid = ({category}) => {
    
    // const [images, setimages] = useState([]);

    // const getImages = async () => {
    //      setimages(await getGifts());
    // // await retorna el value que almacena la promesa si la tiene
    // }
// arreglo vacio en el parametro dependency de useefect significa que solo se ejecuta la primera vez q renderiza
//  y no cuando se redibuja
    // useEffect(() => {
    //     // getImages()
    //     getGifts(category).then((images) => setimages(images))
    //         .catch((error) => console.log(error));
    // }, []);

    const {images, isLoading} = useFetchGifts( category );
   
    return (
        <>
            <h3>{category}</h3>
            {isLoading && ( <h3>cargando</h3>) }
            <div className="card-grid">
                {/* spread operator esparce todo al destinatario en caso todos los fields de image hacia el componente hijo el vera cua
                l le sirve y lo recibira tambien sirve para arreglos  */}
                {images.map((image) => <GiftCard key={image.id} {...image}/> )}
            </div>
        </>
    )
}