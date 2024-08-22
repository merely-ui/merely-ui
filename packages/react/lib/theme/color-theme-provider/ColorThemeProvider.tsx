'use client'

import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { ColorThemeContext } from './color-theme.context'
import { MerelyTheme } from './color-theme.types'

export const ColorThemeProvider: FC<PropsWithChildren<unknown>> = ({
	children
}) => {
	const [theme, setTheme] = useState<MerelyTheme>('dark')

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
			document.documentElement.classList.add('dark')
		} else {
			setTheme('light')
			document.documentElement.classList.add('light')
		}
	}, [])

	return (
		<ColorThemeContext.Provider value={{ theme, changeTheme: setTheme }}>
			{children}
		</ColorThemeContext.Provider>
	)
}
