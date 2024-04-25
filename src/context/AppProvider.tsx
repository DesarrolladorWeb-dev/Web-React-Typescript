import {Context} from './AppContext'
import { AppState, PropsProvider } from '../interfaces/interfaces'

const state:AppState = {
    name: 'Black Widow',
    url : 'http://marvel.io/bw',
    time : '2 horas'
}

export const AppProvider = ({children}: PropsProvider) => {
    return (<>
            {/* cuando se levante la aplicacion tendremos estos tres valores iniciales : name , url ,time*/}
            <Context.Provider value={{state}}>
                {children}
            </Context.Provider>
    </>
    )
}