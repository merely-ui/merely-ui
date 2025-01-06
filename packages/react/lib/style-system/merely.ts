import { cloneElement, createElement, FC, useMemo } from 'react'
import { makeStyles } from './make-styles'
import { ElementFactory } from './types'
import { useStyleProps } from './use-style-props'

const elementCache = new Map<string, FC<any>>()

const merelyImp = new Proxy(
	{},
	{
		get: (_, elem: string) => {
			if (!elementCache.has(elem)) {
				const Element = (props: any) => {
					const { as, _ref, className, overlapCSS, ...anyProps } = props
					const [styles, otherProps] = useStyleProps(anyProps)

					const [readyOverlapCSS] = useStyleProps(overlapCSS ?? {})

					const tagName = as ?? elem
					const cn = makeStyles(styles, className, readyOverlapCSS)

					const element = useMemo(() => {
						if (props?.asChild) {
							return cloneElement(props?.children, {
								...otherProps,
								...props?.children?.props,
								ref: _ref,
								className: cn
							})
						}
						return createElement(tagName, {
							...otherProps,
							ref: _ref,
							className: cn
						})
					}, [_ref, cn, otherProps, props?.asChild, props?.children, tagName])

					return element
				}

				elementCache.set(elem, Element)
			}

			return elementCache.get(elem)
		}
	}
)

export const merely = merelyImp as ElementFactory
