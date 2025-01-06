import { memo } from 'react'

export const SelectArrow = memo(() => {
	return (
		<svg
			display='block'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			viewBox='0 0 16 16'
			height='1em'
			width='1em'
			aria-label='Arrow icon'
		>
			<polyline points='4,6 8,10 12,6'></polyline>
		</svg>
	)
})
