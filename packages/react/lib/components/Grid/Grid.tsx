import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { ElementType } from 'react'
import { GridRecipe } from './Grid.recipe'

export const Grid = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, className, ...otherProps } = props
	const { grid } = useGlobalContext()

	return (
		<merely.div
			className={cx(GridRecipe, className)}
			overlapCSS={grid}
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}
