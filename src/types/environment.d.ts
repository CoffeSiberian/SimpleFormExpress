export declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            REDIRECT_WEB: string;
        }
    }
}
