import { Flex } from "../styled.components";
import Carousel from "./Carrusel";
import Info from "./info";
// interface Props { //ayuda para que cambie el tipo 
//     url? : string; //ahora url sera de tipo string

// }
const Main = (): JSX.Element => {  //usamos JSX.Element porque es un componente retornara 

    return(
        <>
            <Flex>
                <Carousel/>
                <Info/>
            </Flex>
        </>
    )
}
export default Main;