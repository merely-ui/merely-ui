'use client'

import { injectGlobal } from '@emotion/css'
import { FC, PropsWithChildren } from 'react'
import { ColorThemeProvider } from '../color-theme-provider'
import { MerelyGlobalContext, MerelyThemeConfig } from './merely-global-context'

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
	if (!disableGlobalStyles) {
		injectGlobal`
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
		:root {
			font-family: "Inter", sans-serif;
			font-optical-sizing: auto;
			fontWeight: 400;
			font-style: normal;
  		font-variation-settings:
    	"slnt" 0;
		}
		html.dark { 
		background-color: black;
		}
		html.light {
		background-color: #fff;
		}
		@media (prefers-reduced-motion: no-preference) {
			html {
			transition: background-color 150ms ease;
			}
		}
		`
	}

	return (
		<MerelyGlobalContext.Provider value={themeConfig}>
			<ColorThemeProvider>{children}</ColorThemeProvider>
		</MerelyGlobalContext.Provider>
	)
}
