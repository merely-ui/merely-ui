import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import { PopoverRecipe } from './Popover.recipe'

export const PopoverHeader = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, className, ...otherProps } = props

	return (
		<merely.div className={cx(PopoverRecipe.header, className)} {...otherProps}>
			{children}
		</merely.div>
	)
}

PopoverHeader.displayName = '@merely-ui/popover-header'
