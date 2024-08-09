/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
    BACKEND_URL: string;
    TW_CLIENT_ID: string;
    CHAIN_ID: string;
    EXPLORER_URL: string;
    PACKAGE_URL: string;
  }
}
