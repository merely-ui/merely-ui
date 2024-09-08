'use client'

import { useCallback } from 'react'
import { useColorModeContext } from './color-mode.context'
import { MerelyColorMode } from './color-mode.types'

/**
 * `useColorMode` is a custom hook which makes it possible to track the current color mode
 *  @param {MerelyColorMode} overrideMode Override current color theme
 */
export const useColorMode = (overrideMode?: MerelyColorMode) => {
	const { setColorMode, colorMode } = useColorModeContext()

	const toggle = useCallback(() => {
		if (colorMode === 'dark') {
			setColorMode('light')
			document.documentElement.classList.remove('dark')
			document.documentElement.classList.add('light')
		} else {
			setColorMode('dark')
			document.documentElement.classList.remove('light')
			document.documentElement.classList.add('dark')
		}
	}, [setColorMode, colorMode])

	const setNewColorMode = useCallback(
		(newColorMode: MerelyColorMode) => {
			if (newColorMode === 'dark')
				document.documentElement.classList.remove('light')
			else document.documentElement.classList.remove('dark')

			setColorMode(newColorMode)
			document.documentElement.classList.add(newColorMode)
		},
		[setColorMode]
	)

	return {
		colorMode: overrideMode ?? colorMode,
		setColorMode: setNewColorMode,
		toggle
	}
}
