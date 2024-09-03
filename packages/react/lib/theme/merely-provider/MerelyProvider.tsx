'use client'

import { injectGlobal } from '@emotion/css'
import { FC, PropsWithChildren } from 'react'
import { ColorThemeProvider } from '../color-theme-provider'
import { MerelyGlobalContext, MerelyThemeConfig } from './merely-global-context'
import { merelyGlobalStyles } from './merely-global-styles'
import { resetStyles } from './reset-styles'

export interface MerelyProviderProps {
	/** @param {boolean} disableGlobalStyles  If `true`, Merely Global Styles will be disabled :) */
	disableGlobalStyles?: boolean
	/** @param {boolean} CSSReset If `true`, CSS Reset will be enabled ^_^ */
	CSSReset?: boolean
	/** @param {MerelyThemeConfig} themeConfig Pass object to redefine components styles */
	themeConfig?: MerelyThemeConfig
}

export const MerelyProvider: FC<PropsWithChildren<MerelyProviderProps>> = ({
	children,
	disableGlobalStyles,
	CSSReset,
	themeConfig = {}
}) => {
	if (!disableGlobalStyles) injectGlobal(merelyGlobalStyles)
	if (CSSReset) injectGlobal(resetStyles)

	return (
		<MerelyGlobalContext.Provider value={themeConfig}>
			<ColorThemeProvider>{children}</ColorThemeProvider>
		</MerelyGlobalContext.Provider>
	)
}
