import { Box } from '@merely-ui/react'
import Installation from './src/installation'

export const docs: Record<string, any> = {
	'get-started': {
		installation: {
			sidebarTitles: [
				{
					text: 'Framework setup',
					idAttr: 'framework-setup'
				},
				{
					text: 'Installation',
					idAttr: 'installation'
				},
				{
					text: 'Add Provider',
					idAttr: 'provider'
				},
				{
					text: 'Play!',
					idAttr: 'play'
				}
			],
			content: <Installation />
		},
		frameworks: {
			'next-app': {
				sidebarTitles: [
					{
						text: 'Installation',
						idAttr: 'getting-started'
					},
					{
						text: 'Frameworks guides',
						idAttr: 'frameworks-guides'
					}
				],
				content: <Box>app</Box>
			},
			'next-pages': {},
			vite: {}
		}
	}
}
