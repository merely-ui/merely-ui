import { ThemeProps } from '@/style-system/props-types'
import { CSSObject } from '@emotion/css'
import { useMemo } from 'react'
import { applyConditionsStyles } from './apply-conditions-styles'
import { expandStyles } from './expand-styles'

export const useStyleProps = (
	otherProps: Record<string, any>
): [CSSObject, Record<string, any>] => {
	const propsObj = otherProps

	const styleKeys = new Map(Object.entries(new ThemeProps()))

	const filteredStyleProps: CSSObject = useMemo(() => ({}), [])

	Object.entries(propsObj).map(([key, value]) => {
		if (styleKeys.has(key)) {
			filteredStyleProps[key] = value
			delete propsObj[key]
		}
	})

	expandStyles(filteredStyleProps)

	applyConditionsStyles(propsObj, filteredStyleProps)

	return useMemo(
		() => [filteredStyleProps, propsObj],
		[filteredStyleProps, propsObj]
	)
}
