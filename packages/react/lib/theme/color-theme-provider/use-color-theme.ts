'use client'

import { useCallback, useContext } from 'react'
import { ColorThemeContext } from './color-theme.context'
import { MerelyTheme } from './color-theme.types'

/**
 * `useColorTheme` is a custom hook which makes it possible to track the current color mode
 *  @param {MerelyTheme} overrideTheme Override current color theme
 */
export const useColorTheme = (overrideTheme?: MerelyTheme) => {
	const { changeTheme, theme } = useContext(ColorThemeContext)

	const toggle = useCallback(() => {
		if (theme === 'dark') {
			changeTheme('light')
			document.documentElement.classList.remove('dark')
			document.documentElement.classList.add('light')
		} else {
			changeTheme('dark')
			document.documentElement.classList.remove('light')
			document.documentElement.classList.add('dark')
		}
	}, [changeTheme, theme])

	return {
		theme: overrideTheme ?? theme,
		changeTheme,
		toggle
	}
}
