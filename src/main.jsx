import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterComponent } from './pages/RouterPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='h-[100vh] w-full'>
           <RouterComponent></RouterComponent>
    </div>
)
