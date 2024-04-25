import { useNavigate } from "react-router-dom";
import { FaRegPlayCircle , FaStar   } from "react-icons/fa";
import { useContext } from "react";
import { ContainerInfo , MiniAvatar, ButtonBuy} from "../styled.components";
import BlackWindow from '../../assets/black-window.png';
import { Context } from "../../context/AppContext";


const Info = () => {
    const history = useNavigate();
    const {state} = useContext(Context)
    const goToDetails = (): void => {
        history('/detail/2')
    }
    return (<>
        <ContainerInfo height={50}>
            <section className="icon-info">
                <FaRegPlayCircle size={25} color={'red'} />
            </section>
            <section className="title-info">
                {state.name}
            </section>
            <section className="details-info">
                <section className="list-info">
                    <div>2020</div>
                    <div>Fantastic</div>
                    <div>2h 35min</div>
                </section>
            </section>

            <section className='star'>
                <FaStar color="orange"/>
                <FaStar color="orange"/>
                <FaStar color="orange"/>
                <FaStar color="orange"/>
                <FaStar color="orange"/>
            </section>
            <section className="description">
                <div className="description-title">Plot Summary</div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius ea similique ratione accusantium corrupti culpa ducimus facere, cumque rem veniam eaque sequi a perferendis ipsum sunt obcaecati amet laboriosam!</div>
            </section>

            <section className="description">
                <div className="description-title">Cast</div>
                <div className="images">
                    {[1,2,3,4,].map(item =>  <MiniAvatar key={item} src={BlackWindow}/> )} 
                </div>
            </section>
            <section className="button-buy">
                <ButtonBuy onClick={goToDetails}>Comprar</ButtonBuy>
            </section>
        </ContainerInfo>
    </>)
}

export default Info