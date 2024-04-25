import  { useEffect , useState  } from "react";
import { Container, AvatarContaint, Avatar , Degrade} from "../styled.components";
import * as CryptoJS from 'crypto-js';
import BlackWindow from '../../assets/black-window.png';
import {Movie, Item } from '../../interfaces/interfaces'


const Carousel = ():JSX.Element => {
    const ts = 4;
    const privateKey = 'aac3cfe53a823b3e02c8995c2efa8f0f4d713511';
    const publicKey = 'f979f09c50dbeaa8dd3f4f23a2488290';
    const hash = CryptoJS.MD5((ts + privateKey + publicKey).toString()).toString();

    const [data , setData] = useState<Movie[]>([]); // sera un array de tipo movie


    
    const getData = async():Promise<void> => { //una promesa y void porque no estoy retornando nada 

        const url = import.meta.env.VITE_BASE_URL;
        const creador =`${url}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        const items = await fetch(creador);
        const response = await items.json();
        // console.log(response.data.results);
        const aItems = response.data.results.map((item:Item) => {
            
        const obj:Movie = {
            name : item.name, //veremos el autocompletado por el Item
            description : item.description,
            thumbnail: `${item.thumbnail.path}, ${item.thumbnail.extension}`
        }
            return obj
        })
        console.log(aItems)
        setData(aItems);
    }

    useEffect(() => {
        getData();
        console.log('Iniciando ...')
    }, [])

    // console.log( data[0] ); //no puedo poner nombre , thumbnail porque primero llega esto antes de la consulta

    return (<>
    
    {data.length  > 0  ? <> 
        <Container height={50} src={data[3].thumbnail.replace(", ", ".")} />
        <AvatarContaint height={50} >
            <Avatar height={50} src={BlackWindow}/>
        </AvatarContaint >
        <Degrade height={50}/>
        </> :
        <section className = 'loading'>
            cargando
        </section>
    }
    
    </>)
}

export default Carousel