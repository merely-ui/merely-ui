import { CSSObject } from '@emotion/css'

import { ThemeProps } from '@/style-system/props-types'
import { useMemo } from 'react'
import { applyConditionsStyles } from './apply-conditions-styles'
import { expandStyles } from './expand-styles'

// export const useStyleProps = (
// 	otherProps: Record<string, any>
// ): [CSSObject, Record<string, any>] => {
// 	const styleKeys = new Map(Object.entries(new ThemeProps()))

// 	const filteredStyleProps: CSSObject = {}

// 	Object.entries(otherProps).map(([key, value]) => {
// 		if (styleKeys.has(key)) {
// 			filteredStyleProps[key] = value
// 			delete otherProps[key]
// 		}
// 	})

// 	expandStyles(filteredStyleProps)

// 	applyConditionsStyles(otherProps, filteredStyleProps)

// 	return useMemo(
// 		() => [filteredStyleProps, otherProps],
// 		[filteredStyleProps, otherProps]
// 	)
// }

function canBeCloned(val: any) {
	try {
		window.postMessage(val, '*')
	} catch (err) {
		return false
	}
	return true
}

export const useStyleProps = (
	otherProps: Record<string, any>
): [CSSObject, Record<string, any>] => {
	const propsObj = otherProps

	const styleKeys = new Map(Object.entries(new ThemeProps()))

	const filteredStyleProps: CSSObject = {}

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
		[filteredStyleProps, otherProps, propsObj]
	)
}
