import { css, CSSObject, cx } from '@emotion/css'
import { createElement, FC, useMemo } from 'react'
import { MerelyComponentProps, MerelyStyleProps } from './props-types'
import { useStyleProps } from './use-style-props'

type ElementFactory = {
	[K in keyof JSX.IntrinsicElements]: FC<
		JSX.IntrinsicElements[K] &
			MerelyComponentProps<K> & {
				overlapCSS?: MerelyStyleProps
			}
	>
}

const elementCache = new Map<string, FC<any>>()

const makeStyles = (
	styles: CSSObject,
	className?: string,
	overlapCss?: CSSObject
) => {
	return cx(css(overlapCss), css(styles), className)
}

const merelyImp = new Proxy(
	{},
	{
		get: (_, elem: string) => {
			if (!elementCache.has(elem)) {
				const Element = (props: any) => {
					const { as, _ref, className, overlapCSS, ...anyProps } = props
					const [styles, otherProps] = useStyleProps(anyProps)

					const [readyOverlapCSS] = useStyleProps(
						structuredClone(overlapCSS) ?? {}
					)

					const tagName = as ?? elem
					const element = useMemo(
						() =>
							createElement(tagName, {
								...otherProps,
								ref: _ref,
								className: makeStyles(styles, className, readyOverlapCSS)
							}),
						[_ref, className, otherProps, readyOverlapCSS, styles, tagName]
					)

					return element
				}

				elementCache.set(elem, Element)
			}

			return elementCache.get(elem)
		}
	}
)

export const merely = merelyImp as ElementFactory
