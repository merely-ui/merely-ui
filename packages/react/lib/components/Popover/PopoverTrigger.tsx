'use client'

import { merely, MerelyComponentProps } from '@/style-system'
import { ElementType, PropsWithChildren, useCallback, useContext } from 'react'
import { PopoverContext } from './popover-context'

export const PopoverTrigger = <C extends ElementType = 'div'>({
	children,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	const { setIsOpen } = useContext(PopoverContext)

	const handleClick = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [setIsOpen])

	return (
		<merely.div onClick={handleClick} aria-haspopup {...otherProps}>
			{children}
		</merely.div>
	)
}

PopoverTrigger.displayName = '@merely-ui/popover-trigger'
