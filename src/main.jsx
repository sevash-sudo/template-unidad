
import { createRoot } from 'react-dom/client'
import './index.css';
import Routers from "@config/router"

import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/700.css'

createRoot(document.getElementById('root')).render(
 <Routers/>
)
