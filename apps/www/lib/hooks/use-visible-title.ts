import { useEffect, useState } from 'react'
import { throttle } from '../throttle'

export function useVisibleTitle(ids: Array<string>) {
	const [visibleTitle, setVisibleTitle] = useState<string | undefined>()

	const isTitleVisible = (elementId: string) => {
		const title = document.getElementById(elementId)

		if (title) {
			const titlePosition = title.getBoundingClientRect()

			const viewPort = {
				height: window.innerHeight,
				width: window.innerWidth
			}

			return (
				titlePosition.top >= 0 &&
				titlePosition.left >= 0 &&
				titlePosition.bottom <= viewPort.height &&
				titlePosition.right <= viewPort.width
			)
		}

		return false
	}

	const checkVisibility = () => {
		ids.forEach(id => {
			if (isTitleVisible(id)) {
				setVisibleTitle(id)
			}
		})
	}

	useEffect(() => {
		if (ids) {
			window.addEventListener('scroll', throttle(checkVisibility, 150))
		}

		checkVisibility()

		return () =>
			window.addEventListener('scroll', throttle(checkVisibility, 150))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return visibleTitle
}
