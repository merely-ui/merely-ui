'use client'

import { injectGlobal } from '@emotion/css'
import { FC, PropsWithChildren } from 'react'
import { ColorModeProvider, MerelyColorMode } from '../color-mode-provider'
import { MerelyGlobalContext, MerelyThemeConfig } from './merely-global-context'
import { InterFontUrl, merelyGlobalStyles } from './merely-global-styles'
import { resetStyles } from './reset-styles'

export interface MerelyProviderProps {
	/** @param {boolean} disableGlobalStyles  If `true`, Merely Global Styles will be disabled :) */
	disableGlobalStyles?: boolean
	/** @param {boolean} CSSReset If `true`, CSS Reset will be enabled ^_^ */
	CSSReset?: boolean
	/** @param {MerelyThemeConfig} themeConfig Pass object to redefine components styles */
	themeConfig?: MerelyThemeConfig
	/** @param {MerelyColorMode} defaultColorMode Pass Color Mode which will be enabled by default */
	defaultColorMode?: MerelyColorMode
	/** @param {boolean} enableSystemColorMode If `true`, Color Mode will be determined from `prefers-color-scheme` media query */
	enableSystemColorMode?: boolean
	/** @param {boolean} disableUrlFontImport If `true`, `Inter` font will not be loaded from Google Fonts via `@import` at CSS */
	disableUrlFontImport?: boolean
}

export const MerelyProvider: FC<PropsWithChildren<MerelyProviderProps>> = ({
	children,
	disableGlobalStyles,
	CSSReset,
	defaultColorMode = 'dark',
	enableSystemColorMode = false,
	disableUrlFontImport,
	themeConfig = {}
}) => {
	if (!disableUrlFontImport) injectGlobal(InterFontUrl)
	if (!disableGlobalStyles) injectGlobal(merelyGlobalStyles)
	if (CSSReset) injectGlobal(resetStyles)

	return (
		<MerelyGlobalContext.Provider value={themeConfig}>
			<ColorModeProvider
				enableSystemColorMode={enableSystemColorMode}
				defaultColorMode={defaultColorMode}
			>
				{children}
			</ColorModeProvider>
		</MerelyGlobalContext.Provider>
	)
}
