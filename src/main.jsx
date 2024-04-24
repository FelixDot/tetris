import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Tetris from './components/Tetris.jsx'
import './font/Jersey10-Regular.ttf'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tetris />
  </React.StrictMode>,
)
