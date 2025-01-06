import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import { TitleRecipe } from './Title.recipe'

export type TitleSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'

/** @param {ElementType} C Element tag, default to 'h3' */
export type TitleProps<C extends ElementType> = {
	_size?: TitleSize
} & MerelyComponentProps<C>

export const Title = <C extends ElementType = 'h3'>(props: TitleProps<C>) => {
	const { children, _size = 'm', className, theme, ...otherProps } = props

	return (
		<merely.h3
			className={cx(TitleRecipe.base, TitleRecipe.sizes[_size], className)}
			{...otherProps}
		>
			{children}
		</merely.h3>
	)
}
