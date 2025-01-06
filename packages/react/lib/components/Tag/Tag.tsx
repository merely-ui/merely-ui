import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { ElementType } from 'react'
import { TagRecipe } from './Tag.recipe'

export type TagVariant = 'solid' | 'outline'
export type TagSize = 's' | 'm' | 'l'

export type TagProps<C extends ElementType = 'span'> = {
	variant?: TagVariant
	_size?: TagSize
} & MerelyComponentProps<C>

export const Tag = <C extends ElementType = 'span'>(props: TagProps<C>) => {
	const {
		children,
		theme,
		className,
		variant = 'solid',
		_size = 'm',
		...otherProps
	} = props

	const { tag } = useGlobalContext()

	return (
		<merely.span
			className={cx(
				TagRecipe.base,
				TagRecipe.sizes[_size],
				TagRecipe.variants[variant],
				className
			)}
			overlapCSS={tag}
			{...otherProps}
		>
			{children}
		</merely.span>
	)
}
