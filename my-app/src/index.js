import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import AuthContextProvider from './Context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ChakraProvider>
         <App />
      </ChakraProvider>
      </AuthContextProvider>
    </BrowserRouter>
    </React.StrictMode>

);

reportWebVitals();
