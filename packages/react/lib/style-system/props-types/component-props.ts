import { MerelyColorMode } from '@/theme/color-mode-provider'
import {
	ComponentProps,
	ComponentPropsWithoutRef,
	ElementType,
	Ref
} from 'react'
import { MerelyStyleProps } from '.'

type CompoundProps<K extends ElementType> = {
	_ref?: Ref<ComponentProps<K>>
	as?: ElementType
	theme?: MerelyColorMode
}

export type MerelyComponentProps<K extends ElementType> = Omit<
	ComponentPropsWithoutRef<K>,
	'color'
> &
	CompoundProps<K> &
	MerelyStyleProps
