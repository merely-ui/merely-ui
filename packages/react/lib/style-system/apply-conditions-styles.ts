import { CSSObject } from '@emotion/css'
import { expandStyles } from './expand-styles'
import { ConditionsQueries } from './props-types'

export const applyConditionsStyles = (
	stylesPropsObj: Record<string, any> = {},
	filteredStyleObj: CSSObject = {}
) => {
	ConditionsQueries.forEach(({ cssQuery, property }) => {
		if (stylesPropsObj[property]) {
			filteredStyleObj[cssQuery] = expandStyles(stylesPropsObj[property])
			delete stylesPropsObj[property]
		}
	})
}
