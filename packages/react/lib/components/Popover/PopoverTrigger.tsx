import { MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import { Button } from '../Button'
import { usePopoverContext } from './popover-context'

export const PopoverTrigger = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, ...otherProps } = props

	const { setIsOpen, id } = usePopoverContext()

	const onClick = () => setIsOpen(prev => !prev)

	return (
		<Button
			onClick={onClick}
			role='tooltip'
			aria-controls={id}
			aria-haspopup
			{...otherProps}
		>
			{children}
		</Button>
	)
}

PopoverTrigger.displayName = '@merely-ui/popover-trigger'
