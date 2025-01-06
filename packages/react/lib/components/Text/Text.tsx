import { MerelyComponentProps, cx, merely } from '@/style-system'
import { ElementType } from 'react'
import { TextRecipe } from './Text.recipe'

export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'

export type TextProps<C extends ElementType> = {
	_size?: TextSize
} & MerelyComponentProps<C>

export const Text = <C extends ElementType = 'p'>(props: TextProps<C>) => {
	const { children, _size = 'm', className, theme, ...otherProps } = props

	return (
		<merely.p
			className={cx(TextRecipe.base, TextRecipe.sizes[_size], className)}
			{...otherProps}
		>
			{children}
		</merely.p>
	)
}
