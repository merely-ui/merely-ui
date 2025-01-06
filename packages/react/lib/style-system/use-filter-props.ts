import isPropValid from '@emotion/is-prop-valid'
import { useMemo } from 'react'
import { HTMLProps, MerelyHTMLProps } from './props'
import { StringObject } from './types'

export const useFilterProps = (props: any) => {
	const styleProps: StringObject = useMemo(() => ({}), [])

	props = useMemo(
		() =>
			Object.fromEntries(
				Object.entries(props).map(([prop, propValue]) => {
					// If prop is a CSS prop, we forward it to style props
					if (
						(!isPropValid(prop) || HTMLProps.includes(prop)) &&
						!MerelyHTMLProps.includes(prop)
					) {
						styleProps[prop] = propValue
						return []
					}
					// If prop is HTML valid, we forward it
					if (!MerelyHTMLProps.includes(prop)) {
						return [prop, propValue]
					}
					// If there are props like 'htmlColor' and etc
					const parsedPropName = prop.replace('html', '').toLowerCase()
					return [parsedPropName, propValue]
				})
			),
		[props, styleProps]
	)

	return useMemo(() => [styleProps, props], [props, styleProps])
}
