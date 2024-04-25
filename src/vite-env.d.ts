/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string; //agarro esto del .env
}

interface ImportMeta {
    readonly env : ImportMetaEnv; //y lo asigno para que aparescan al usar .env
}