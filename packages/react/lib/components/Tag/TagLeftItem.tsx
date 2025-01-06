import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType, PropsWithChildren } from 'react'
import { TagRecipe } from './Tag.recipe'

export const TagLeftItem = <C extends ElementType = 'span'>({
	children,
	theme,
	className,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	return (
		<merely.span className={cx(TagRecipe.left, className)} {...otherProps}>
			{children}
		</merely.span>
	)
}
