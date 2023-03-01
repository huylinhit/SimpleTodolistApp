import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// function emitComent(id){
//   setInterval(() =>{
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `This is the message from lesson-${id}`
//       })
//     )
//   }, 2000);
// }
// emitComent(0);
// emitComent(1);
// emitComent(2);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
