import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/**vercel monitoring*/}
    <SpeedInsights />
    <Analytics />
    {/********************/}
    <App />
  </React.StrictMode>,
)
