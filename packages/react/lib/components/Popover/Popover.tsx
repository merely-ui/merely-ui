import { useOutsideDisclosure } from '@/hooks'
import { merely, MerelyComponentProps, useDelayUnmount } from '@/style-system'
import { usePosition } from '@/utilities/pos'
import { useId, useRef } from 'react'
import { PopoverContext } from './popover-context'

export type PopoverDirection = 'left' | 'right' | 'bottom' | 'top'

export interface PopoverProps extends MerelyComponentProps<'div'> {
	_direction?: PopoverDirection
}

export const Popover = (props: PopoverProps) => {
	const { children, className, _direction = 'right', ...otherProps } = props

	const ref = useRef(null)
	const {
		setIsOpen,
		isOpen,
		ref: positioningRef
	} = useOutsideDisclosure({
		refs: [ref]
	})
	const { shouldRender } = useDelayUnmount(isOpen, 150)
	const { x, y } = usePosition(ref, positioningRef, _direction)

	return (
		<PopoverContext.Provider
			value={{
				isOpen: shouldRender,
				setIsOpen,
				direction: _direction,
				positioningRef,
				x,
				y,
				id: useId()
			}}
		>
			<merely.div display='inline-block' _ref={ref} {...otherProps}>
				{children}
			</merely.div>
		</PopoverContext.Provider>
	)
}
