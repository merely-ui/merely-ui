import { Grid } from '@merely-ui/react'
import Sidebar from './sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Grid
			justifyContent='space-between'
			gridTemplateColumns={'1fr 3fr 1fr'}
			mt={112}
		>
			<Sidebar />
			{children}
		</Grid>
	)
}
