import { CSSObject } from '@emotion/css'
import { stylePropsMapper } from './style-mapper'

export const expandStyles = (styles: CSSObject = {}) => {
	Object.keys(styles).forEach(item => {
		if (Object.keys(stylePropsMapper).includes(item)) {
			styles[stylePropsMapper[item]] = styles[item]
			delete styles[item]
		}
	})

	return styles
}
