import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import App from './App.tsx'
import './index.css'
import Store, { Persistore } from './store/Store.ts';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={Persistore} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
