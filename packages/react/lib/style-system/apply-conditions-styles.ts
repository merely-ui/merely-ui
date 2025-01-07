import { expandStyles } from './expand-styles'
import { ConditionsQueries } from './props/conditions/conditions'
import { StringObject } from './types'

export const applyConditionsStyles = (stylesProps: StringObject = {}) => {
	ConditionsQueries.forEach(q => {
		if (q.property in stylesProps) {
			stylesProps[q.cssQuery] = Object.fromEntries(
				Object.entries(expandStyles(stylesProps[q.property])).map(
					([prop, propValue]) => {
						if (
							(ConditionsQueries.map(c => c.property) as string[]).includes(
								prop
							)
						) {
							return [
								ConditionsQueries.find(c => c.property === prop)?.cssQuery,
								expandStyles(propValue)
							]
						}
						return [prop, propValue]
					}
				)
			)
		}
	})
}
