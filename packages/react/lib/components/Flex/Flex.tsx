import { cx, merely } from '@/style-system'
import { MerelyComponentProps } from '@/style-system/props'
import { useGlobalContext } from '@/theme'
import { ElementType } from 'react'
import { FlexRecipe } from './Flex.recipe'

const Flex = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, className, ...otherProps } = props
	const { flex } = useGlobalContext()

	return (
		<merely.div
			className={cx(FlexRecipe, className)}
			overlapCSS={flex}
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}

export { Flex, Flex as Stack }
