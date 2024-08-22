import { MerelyProvider } from '@merely-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MerelyProvider>
			<App />
		</MerelyProvider>
	</React.StrictMode>
)
