import { useTheme } from 'next-themes'
import { useCallback } from 'react'
import { MerelyColorMode } from './color-mode.types'

/**
 * `useColorMode` is a custom hook which makes it possible to track and switch the current color mode
 */
export const useColorMode = () => {
	const { resolvedTheme: colorMode, setTheme } = useTheme()

	const toggle = () => {
		if (colorMode === 'dark') {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}

	const setColorMode = useCallback(
		(newColorMode: MerelyColorMode) => {
			setTheme(newColorMode)
		},
		[setTheme]
	)

	return {
		colorMode,
		setColorMode,
		toggle
	}
}
