import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer} from 'react-toastify';
import AuthProvider from './Provider/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
    <App />
    </AuthProvider>
    <ToastContainer/>
  </>,
)