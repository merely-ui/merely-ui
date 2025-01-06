import { MerelyColorMode } from '@/theme/color-mode-provider'
import {
	ComponentProps,
	ComponentPropsWithoutRef,
	ElementType,
	Ref
} from 'react'
import { MerelyStyleProps } from '.'
import type { HTMLProps } from './html-props'

interface CompoundProps<K extends ElementType> extends Partial<HTMLProps> {
	_ref?: Ref<ComponentProps<K>>
	as?: ElementType
	asChild?: boolean
	theme?: MerelyColorMode
}

export type MerelyComponentProps<K extends ElementType> = Omit<
	ComponentPropsWithoutRef<K>,
	'color'
> &
	CompoundProps<K> &
	MerelyStyleProps
