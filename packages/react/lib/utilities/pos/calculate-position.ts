import { RefObject } from 'react'
import { Direction, Position } from './types'

export const calculatePosition = (
	anchorRect: DOMRect,
	positioningRect: DOMRect,
	direction: Direction,
	margin = 12 // 12px margin to anchor
): Position => {
	switch (direction) {
		case 'top': {
			return {
				x: Math.round(
					anchorRect.left + anchorRect.width / 2 - positioningRect.width / 2
				),
				y: Math.round(
					anchorRect.top + window.scrollY - positioningRect.height - margin
				)
			}
		}
		case 'bottom': {
			return {
				x: Math.round(
					anchorRect.left + anchorRect.width / 2 - positioningRect.width / 2
				),
				y: Math.round(
					anchorRect.top + window.scrollY + anchorRect.height + margin
				)
			}
		}
		case 'left': {
			return {
				x: Math.round(anchorRect.left - positioningRect.width - margin),
				y: Math.round(
					anchorRect.top +
						window.scrollY +
						anchorRect.height / 2 -
						positioningRect.height / 2
				)
			}
		}
		case 'right': {
			return {
				x: Math.round(
					anchorRect.left + window.scrollX + anchorRect.width + margin
				),
				y: Math.round(
					anchorRect.top +
						window.scrollY +
						anchorRect.height / 2 -
						positioningRect.height / 2
				)
			}
		}
		default: {
			return {
				x: 0,
				y: 0
			}
		}
	}
}

export const getPosition = (
	anchorRef: RefObject<HTMLElement> | null,
	positioningRef: RefObject<HTMLElement> | null,
	direction: 'top' | 'left' | 'right' | 'bottom',
	margin: number
): Position => {
	const anchorEl = anchorRef?.current
	const positioningEl = positioningRef?.current

	if (!anchorEl || !positioningEl) return { x: 0, y: 0 }

	const anchorRect = anchorEl.getBoundingClientRect()
	const positioningRect = positioningEl.getBoundingClientRect()

	return calculatePosition(anchorRect, positioningRect, direction, margin)
}
