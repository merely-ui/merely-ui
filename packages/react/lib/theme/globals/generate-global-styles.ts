import { colors } from '../color-palette/colors'
import { getColorPaletteCSSVars } from './get-color-palette-vars'
import { getDarkVars, getGlobalVars, getLightVars } from './get-theme-vars'
import { ResetCSS } from './reset-styles'

export const generateGlobalStyles = (
	cssPrefix: string,
	disableGlobalStyles?: boolean,
	CSSReset?: boolean
) => {
	if (disableGlobalStyles) return {}

	return {
		...(CSSReset && ResetCSS),
		':root': {
			fontOpticalSizing: 'auto',
			fontWeight: 400,
			fontStyle: 'normal',
			fontVariationSettings: '"slnt" 0'
		},
		'[data-theme="dark"]': {
			backgroundColor: colors.black,
			...getDarkVars()
		},
		'[data-theme="light"]': {
			backgroundColor: colors.white,
			...getLightVars()
		},
		html: {
			...getGlobalVars(),
			...getColorPaletteCSSVars(cssPrefix)
		}
	}
}
