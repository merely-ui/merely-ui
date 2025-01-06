import { RefObject, useCallback, useEffect, useRef } from 'react'
import { useDisclosure } from './use-disclosure'

export interface UseOutsideDisclosureProps {
	onCloseCallback?: () => void
	refs: (RefObject<HTMLElement> | null)[]
}

/**
 * `useOutsideDisclosure` is a special hook that helps you show and hide things like pop-ups or menus and also handles click outside of Element.
 * It makes it easy to control when something appears or disappears on the screen.
 * @returns {Object} `ref`, `onClose`, `onOpen`, `toggle`, `setIsOpen`
 */
export const useOutsideDisclosure = ({
	onCloseCallback,
	refs
}: Partial<UseOutsideDisclosureProps>) => {
	const ref = useRef(null)
	const disclosure = useDisclosure()

	const handleClickOutside = useCallback(
		(event: any) => {
			const isOutsideMultiple = refs?.length
				? refs.every(ref => !ref?.current?.contains(event.target))
				: true
			if (
				ref.current &&
				!(ref.current as HTMLElement).contains(event.target) &&
				isOutsideMultiple
			) {
				disclosure.onClose()
				onCloseCallback && onCloseCallback()
			}
		},
		[disclosure, onCloseCallback, refs]
	)

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [onCloseCallback, disclosure, disclosure.onClose, handleClickOutside])

	return { ref, ...disclosure }
}
