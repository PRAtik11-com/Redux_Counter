import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { stores } from './Component/store.js'


createRoot(document.getElementById('root')).render(
  <Provider  store={stores} >
    <App />
  </Provider>  

)
