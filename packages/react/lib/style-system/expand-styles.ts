import { stylePropsMapper } from './style-mapper'
import { StringObject } from './types'

export const expandStyles = (styles: StringObject = {}) => {
	const expandedStyles = Object.fromEntries(
		Object.entries(styles).map(([key, value]) => {
			if (Object.keys(stylePropsMapper).includes(key)) {
				return [stylePropsMapper[key], value]
			}
			return [key, value]
		})
	)

	return expandedStyles
}
