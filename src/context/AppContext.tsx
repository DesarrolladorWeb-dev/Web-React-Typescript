import { createContext } from "react";
import {AppState} from '../interfaces/interfaces'

type State = {
    // espera un state esto en minusculas de AppProvider
    state: AppState //aqui tendremos el name, url, time que stan en AppState
}

export const Context = createContext<State>({} as State ); //se que te enviamos vacio ,pero en un futuro sera de tipo State
