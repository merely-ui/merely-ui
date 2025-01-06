import { FC } from 'react'
import { MerelyComponentProps, MerelyStyleProps } from './props'

export type StringObject<T extends string = string> = Record<T, any>

export type ElementFactory = {
	[K in keyof JSX.IntrinsicElements]: FC<
		JSX.IntrinsicElements[K] &
			MerelyComponentProps<K> & {
				overlapCSS?: MerelyStyleProps
			}
	>
}
