'use client'

import { merely, MerelyComponentProps } from '@/style-system'
import { ElementType, PropsWithChildren } from 'react'
import { usePopoverContext } from './popover-context'

export const PopoverTrigger = <C extends ElementType = 'div'>({
	children,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	const { setIsOpen } = usePopoverContext()

	const onClick = () => setIsOpen(prev => !prev)

	return (
		<merely.div onClick={onClick} aria-haspopup {...otherProps}>
			{children}
		</merely.div>
	)
}

PopoverTrigger.displayName = '@merely-ui/popover-trigger'
