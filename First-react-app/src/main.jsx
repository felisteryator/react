import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ChatNotification from './useEffect.jsx'
import App2 from './useContext.jsx'
import Events from './Events.jsx'
import Counter from './counter.jsx'
import Lists from './Lists.jsx'
import Form from './form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter/>
    <Lists/>
    <ChatNotification/>
    <App2 />
    <Events/>
    <Form/>

  </StrictMode>
)
