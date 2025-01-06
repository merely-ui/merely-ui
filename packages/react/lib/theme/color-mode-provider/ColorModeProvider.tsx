import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { MerelyColorMode } from './color-mode.types'

interface ColorModeProviderProps {
	defaultColorMode: MerelyColorMode
	enableSystemColorMode: boolean
	children: ReactNode
}

export const ColorModeProvider = (props: ColorModeProviderProps) => {
	const { children, defaultColorMode, enableSystemColorMode } = props

	return (
		<ThemeProvider
			defaultTheme={defaultColorMode}
			enableSystem={enableSystemColorMode}
		>
			{children}
		</ThemeProvider>
	)
}
