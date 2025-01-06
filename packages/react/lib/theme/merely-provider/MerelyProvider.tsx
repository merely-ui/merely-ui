import { injectGlobal } from '@emotion/css'
import { ReactNode } from 'react'
import { ColorModeProvider, MerelyColorMode } from '../color-mode-provider'
import { generateGlobalStyles } from '../globals/generate-global-styles'
import { MerelyGlobalContext, MerelyThemeConfig } from './merely-global-context'

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
	/** @param {string} cssPrefix Pass string which will be replace prefix of CSS colors variables
	 * @default `--merely`
	 */
	cssPrefix?: string
	children: ReactNode
}

export const MerelyProvider = (props: MerelyProviderProps) => {
	const {
		children,
		disableGlobalStyles,
		CSSReset = false,
		defaultColorMode = 'dark',
		enableSystemColorMode = false,
		themeConfig = {},
		cssPrefix = '--merely'
	} = props

	injectGlobal(generateGlobalStyles(cssPrefix, disableGlobalStyles, CSSReset))

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
