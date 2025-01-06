import { useCallback, useMemo, useState } from 'react'

/**
 * `useDisclosure` is a special hook that helps you show and hide things like pop-ups or menus.
 * It makes it easy to control when something appears or disappears on the screen.
 * @returns {Object} `onClose`, `onOpen`, `toggle`, `setIsOpen`
 */
export const useDisclosure = () => {
	const [isOpen, setIsOpen] = useState(false)

	const onOpen = useCallback(() => {
		setIsOpen(true)
	}, [])

	const onClose = useCallback(() => {
		setIsOpen(false)
	}, [])

	const toggle = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [])

	return useMemo(
		() => ({
			isOpen,
			onOpen,
			onClose,
			toggle,
			setIsOpen
		}),
		[isOpen, onClose, onOpen, toggle]
	)
}
