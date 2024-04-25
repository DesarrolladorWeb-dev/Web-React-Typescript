
export interface Movie { // de las propiedades que solo tendra el objeto 
    name: string;
    description: string ;
    thumbnail: string;
}

export interface Item { //mapeo de lo que la respuesta me esta dando 
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export interface Props{
    height?:number; //le psaremos in height como parametro opcional
    src? : string;
}

export interface PropsProvider {
    //  JSX.Element[] es para que se traigue mas de un elemento en el App.tsx como hijos
    children: JSX.Element | JSX.Element[]//le decimos que es un componente
}

export interface AppState {
    name: string;
    url : string;
    time : string;
}