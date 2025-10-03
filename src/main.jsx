import { StrictMode } from 'react'
import './api/server.js'
import { createRoot } from 'react-dom/client'
import { store } from './pages/counter/store.js'
import { Provider } from 'react-redux'
import CounterPage from './pages/counter/CounterPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CounterPage />
    </Provider>
  </StrictMode>,
)
