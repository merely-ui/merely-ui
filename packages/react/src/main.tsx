import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { MerelyProvider } from '../lib'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MerelyProvider>
			<App />
		</MerelyProvider>
	</StrictMode>
)
