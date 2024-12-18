import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './routes/Home.jsx';







createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <StrictMode>
              <Routes>
                  <Route path="/" element={<App />} >
                      <Route index element={ <Home/> }/>
                      
                  </Route>
              </Routes>
      </StrictMode>,
  </BrowserRouter>
)
