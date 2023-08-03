const ENV = import.meta.env.VITE_REACT_APP_ENV;
const APP_VERSION = import.meta.env.VITE_REACT_APP_VERSION as string;
const APP_NAME = import.meta.env.VITE_REACT_APP_NAME as string;
const API_URL = import.meta.env.VITE_REACT_APP_API_URL as string;

export {
  ENV,
  APP_VERSION,
  APP_NAME,
  API_URL,
};
