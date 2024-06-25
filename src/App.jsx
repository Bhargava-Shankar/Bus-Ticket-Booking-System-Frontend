import React from 'react'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import store from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <div className=" bg-slate-600 h-full">
          <NavBar></NavBar>
          <MainContent></MainContent>
      </div>
    </Provider>
    
  )
}

export default App
