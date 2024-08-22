import { Children, ReactNode } from 'react'
import { CompositeComponentsNames } from './props-types'

export const getChild = (
	children: ReactNode,
	displayName: CompositeComponentsNames
) => {
	const child = Children.toArray(children).find(
		//@ts-expect-error no typings provided
		child => child?.type?.displayName === displayName
	)

	if (!child) return null
	return child
}
