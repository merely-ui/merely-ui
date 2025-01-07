import { injectGlobal } from '@emotion/css'
import { ThemeProvider } from 'next-themes'
import { MerelyColorMode } from '../color-mode'
import { generateGlobalStyles } from '../globals/generate-global-styles'
import { MerelyGlobalContext, MerelyThemeConfig } from './merely-global-context'

export interface MerelyProviderProps {
	/** @param {boolean} disableGlobalStyles  If `true`, Merely Global Styles will be disabled :) */
	disableGlobalStyles?: boolean
	/** @param {boolean} CSSReset If `true`, CSS Reset will be enabled ^_^ */
	CSSReset?: boolean
	/** @param {MerelyThemeConfig} themeConfig Pass object to redefine components styles */
	themeConfig?: MerelyThemeConfig
	/** @param {string} cssPrefix Pass string which will be replace prefix of CSS colors variables
	 * @default `--merely`
	 */
	cssPrefix?: string
	/** @param {MerelyColorMode} defaultColorMode Pass Color Mode which will be enabled by default */
	defaultColorMode?: MerelyColorMode
	/** @param {boolean} enableSystemColorMode If `true`, Color Mode will be determined from `prefers-color-scheme` media query */
	enableSystemColorMode?: boolean
	/** @param {Array} themes Array of themes (next-themes)
	 * @default ['light', 'dark']
	 */
	themes?: string[]
	/** @param {boolean} disableTransitionOnChange Optionally disable all CSS transitions when switching themes (next-themes)
	 * @default true
	 */
	disableTransitionOnChange?: boolean
	/** @param {string} forcedTheme Forced theme name for the current page (does not modify saved theme settings) (next-themes)
	 */
	forcedTheme?: string | MerelyColorMode
	children: React.ReactNode
}

export const MerelyProvider = (props: MerelyProviderProps) => {
	const {
		children,
		disableGlobalStyles,
		CSSReset = false,
		defaultColorMode,
		enableSystemColorMode = false,
		themeConfig = {},
		themes = ['light', 'dark'],
		disableTransitionOnChange,
		forcedTheme,
		cssPrefix = '--merely'
	} = props

	injectGlobal(generateGlobalStyles(cssPrefix, disableGlobalStyles, CSSReset))

	return (
		<MerelyGlobalContext.Provider value={themeConfig}>
			<ThemeProvider
				defaultTheme={defaultColorMode}
				themes={themes}
				enableSystem={enableSystemColorMode}
				disableTransitionOnChange={disableTransitionOnChange}
				forcedTheme={forcedTheme}
			>
				{children}
			</ThemeProvider>
		</MerelyGlobalContext.Provider>
	)
}
