import { useEffect, useRef } from 'react'
import { useDisclosure } from './use-disclosure'

/**
 * `useOutsideDisclosure` is a special hook that helps you show and hide things like pop-ups or menus and also handles click outside of Element.
 * It makes it easy to control when something appears or disappears on the screen.
 * @param {Object} onCloseCallback - The callback that runs with `onClose`
 * @returns {Object} `ref`, `onClose`, `onOpen`, `toggle`, `setIsOpen`
 */
export const useOutsideDisclosure = (onCloseCallback?: () => void) => {
	const ref = useRef(null)
	const disclosure = useDisclosure()

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			//@ts-expect-error ref typings so bad
			if (ref.current && !ref.current.contains(event.target)) {
				disclosure.onClose()
				onCloseCallback && onCloseCallback()
			}
		}

		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [onCloseCallback, disclosure, disclosure.onClose])

	return { ref, ...disclosure }
}
