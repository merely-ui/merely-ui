import { useCallback, useState } from 'react'

/**
 * `useHover` is a special hook that helps you to track hover at the element.
 * @returns {Object} `onMouseEnter`, `onMouseLeave`, `isOpen`
 */
export const useHover = () => {
	const [isOpen, setIsOpen] = useState(false)

	const onMouseEnter = useCallback(() => {
		setIsOpen(true)
	}, [])

	const onMouseLeave = useCallback(() => {
		setIsOpen(false)
	}, [])

	return {
		onMouseEnter,
		onMouseLeave,
		isOpen
	}
}
