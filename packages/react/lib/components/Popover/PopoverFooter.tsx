import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import { PopoverRecipe } from './Popover.recipe'

export const PopoverFooter = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, className, ...otherProps } = props

	return (
		<merely.div className={cx(PopoverRecipe.footer, className)} {...otherProps}>
			{children}
		</merely.div>
	)
}

PopoverFooter.displayName = '@merely-ui/popover-footer'
