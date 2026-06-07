import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import PR28_3 from './PR28_3.jsx'
// import PR28_4 from './PR28_4.jsx'
// import PR29_1 from './PR29_1.jsx'
import PR29_2 from './PR29_2.jsx'

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <PR28_3 /> */}
//     {/* <PR28_4 /> */}
//     <PR29_1 />
//   </React.StrictMode>,
// )

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<React.StrictMode><PR29_2 /></React.StrictMode>);
