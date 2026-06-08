// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// // import PR28_3 from './PR28_3.jsx'
// // import PR28_4 from './PR28_4.jsx'

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     {/* <PR28_3 /> */}
//     {/* <PR28_4 /> */}
//   </React.StrictMode>,
// )

// tugas 31 bagian 3

// import ReactDOM from 'react-dom/client';
// import App from './App'; // Buat file App.js
// import { UserProvider } from './PR31_2/UserContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <UserProvider>
//     <App />
//   </UserProvider>
// );

// tugas 32
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);