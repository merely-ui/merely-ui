import { MerelyComponentProps, cx } from '@/style-system'
import { Cross } from '@/theme'
import { ReactNode } from 'react'
import { Button } from '../Button'
import { usePopoverContext } from './popover-context'
import { PopoverRecipe } from './Popover.recipe'

export interface PopoverCloseButtonProps
	extends MerelyComponentProps<'button'> {
	icon?: ReactNode
}

export const PopoverCloseButton = (props: PopoverCloseButtonProps) => {
	const { children, className, theme, icon, ...otherProps } = props

	const { setIsOpen } = usePopoverContext()
	const onClick = () => setIsOpen(false)

	return (
		<Button
			variant='clear'
			onClick={onClick}
			tabIndex={0}
			className={cx(PopoverRecipe.closeButton, className)}
			{...otherProps}
		>
			{icon ? icon : <Cross />}
		</Button>
	)
}

PopoverCloseButton.displayName = '@merely-ui/popover-close-button'
