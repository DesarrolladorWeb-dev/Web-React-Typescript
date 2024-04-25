import styled from "styled-components";
// instalamos los tipos para typescript  @types/styled-components@5.1.22

// Creamos interfaces de estilo
interface Props {
    primary?: boolean; //tiene que llegar este parametro(prop)

}
//el Props significa que tiene que llegar primary obligatoriamente o opcional(?) 
export const Button  = styled.button<Props>` 
    border : 1px solid #080;
    padding: 10px;
    border-radius: 7px;
    color: red;
    /* Si existe primary enviada como paramtro(prop) */
    ${props => props.primary ? 'background: green' : ' background: #DDD'}

`

export const Container = styled.div<Props>`
    width: 100%;
    padding:50px;
`;