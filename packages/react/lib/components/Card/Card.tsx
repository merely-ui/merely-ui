import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { CardRecipe } from './Card.recipe'

export type CardSize = 's' | 'm' | 'l'

export interface CardProps extends MerelyComponentProps<'div'> {
	_size?: CardSize
}

export const Card = (props: CardProps) => {
	const { children, _size = 'm', className, theme, ...otherProps } = props
	const { card } = useGlobalContext()

	return (
		<merely.div
			className={cx(CardRecipe.base, CardRecipe.sizes[_size], className)}
			overlapCSS={card}
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}
