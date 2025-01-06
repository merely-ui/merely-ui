import { expandStyles } from './expand-styles'
import { ConditionsQueries } from './props/conditions/conditions'
import { StringObject } from './types'

export const applyConditionsStyles = (stylesProps: StringObject = {}) => {
	ConditionsQueries.forEach(q => {
		if (q.property in stylesProps) {
			stylesProps[q.cssQuery] = expandStyles(stylesProps[q.property])
		}
	})
}
