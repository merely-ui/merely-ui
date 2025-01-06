import { useMemo } from 'react'
import { applyConditionsStyles } from './apply-conditions-styles'
import { expandStyles } from './expand-styles'
import { StringObject } from './types'
import { useFilterProps } from './use-filter-props'

export const useStyleProps = (
	incomingProps: StringObject
): [StringObject, StringObject] => {
	const [styleProps, htmlProps] = useFilterProps(incomingProps)

	const finalStyles = expandStyles(styleProps)
	applyConditionsStyles(finalStyles)

	return useMemo(() => [finalStyles, htmlProps], [finalStyles, htmlProps])
}
