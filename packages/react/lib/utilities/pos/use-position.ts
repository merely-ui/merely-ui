import { RefObject, useCallback, useEffect, useState } from 'react'
import { getPosition } from './calculate-position'
import { Direction, Position } from './types'

export const usePosition = (
	anchorRef: RefObject<HTMLElement> | null,
	positioningRef: RefObject<HTMLElement> | null,
	direction: Direction,
	margin = 12 // 12px margin to anchor
): Position => {
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

	const updatePosition = useCallback(() => {
		const newPos = getPosition(anchorRef, positioningRef, direction, margin)
		setPosition(newPos)
	}, [anchorRef, positioningRef, direction, margin])

	useEffect(() => {
		if (!anchorRef?.current || !positioningRef?.current) return

		updatePosition()
		window.addEventListener('resize', updatePosition)

		return () => {
			window.removeEventListener('resize', updatePosition)
		}
	}, [anchorRef, positioningRef, updatePosition])

	return position
}
