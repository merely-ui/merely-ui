import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import { Portal } from '../Portal'
import { usePopoverContext } from './popover-context'
import { PopoverRecipe } from './Popover.recipe'

export const PopoverContent = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, theme, className, ...otherProps } = props

	const { direction, isOpen, x, y, positioningRef, id } = usePopoverContext()

	return (
		<Portal>
			<merely.div
				_ref={positioningRef}
				className={cx(
					PopoverRecipe.content,
					{
						[PopoverRecipe.open]: isOpen,
						[PopoverRecipe.hidden]: !isOpen,
						[PopoverRecipe[direction]]: !isOpen
					},
					className
				)}
				left={x}
				top={y}
				aria-hidden={!isOpen}
				id={id}
				{...otherProps}
			>
				{children}
			</merely.div>
		</Portal>
	)
}

PopoverContent.displayName = '@merely-ui/popover-content'
