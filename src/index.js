import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDehvAl5xmNNdBJs7vImoRVkICz0TgPUnU",
  authDomain: "live-chat-react-app-ce96e.firebaseapp.com",
  projectId: "live-chat-react-app-ce96e",
  storageBucket: "live-chat-react-app-ce96e.appspot.com",
  messagingSenderId: "236945108921",
  appId: "1:236945108921:web:5ecf42beecda2cf9c9d068"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
