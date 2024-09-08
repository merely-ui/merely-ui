'use client'

import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { ColorModeContext } from './color-mode.context'
import { MerelyColorMode } from './color-mode.types'

interface ColorModeProviderProps {
	defaultColorMode: MerelyColorMode
	enableSystemColorMode: boolean
}

export const ColorModeProvider: FC<
	PropsWithChildren<ColorModeProviderProps>
> = ({ children, defaultColorMode, enableSystemColorMode }) => {
	const [colorMode, setColorMode] = useState<MerelyColorMode>(defaultColorMode)

	useEffect(() => {
		document.documentElement.classList.add(defaultColorMode)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (!enableSystemColorMode) return

		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setColorMode('dark')
			document.documentElement.classList.add('dark')
		} else {
			setColorMode('light')
			document.documentElement.classList.add('light')
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<ColorModeContext.Provider value={{ colorMode, setColorMode }}>
			{children}
		</ColorModeContext.Provider>
	)
}
