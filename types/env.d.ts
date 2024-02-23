// @ts-ignore
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_USER: string;
      DB_PASSWORD: string;
      DB_DB: string;
    }
  }
}
