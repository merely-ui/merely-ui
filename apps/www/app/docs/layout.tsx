import { Grid } from '@merely-ui/react'
import Sidebar from './sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Grid
			justifyContent='space-between'
			gridTemplateColumns={'1fr'}
			mt={112}
			_xl={{
				gridTemplateColumns: 'minmax(0, 255px) 3fr 1fr'
			}}
			_md={{
				gridTemplateColumns: 'minmax(0, 255px) 1fr'
			}}
		>
			<Sidebar />
			{children}
		</Grid>
	)
}
