import { css, keyframes } from '@/style-system'

const opacityIn = keyframes({
	from: {
		opacity: 0
	},
	to: {
		opacity: 1
	}
})
const opacityOut = keyframes({
	from: {
		opacity: 1
	},
	to: {
		opacity: 0
	}
})
const scaleIn = keyframes({
	from: {
		scale: 0.9
	},
	to: {
		scale: 1
	}
})
const scaleOut = keyframes({
	from: {
		scale: 1
	},
	to: {
		scale: 0.9
	}
})

export const ModalRecipe = {
	base: css({
		'@media (prefers-reduced-motion: no-preference)': {
			animation: opacityIn,
			animationDuration: '100ms',
			animationTimingFunction: 'ease'
		}
	}),
	unmountModal: css({
		'@media (prefers-reduced-motion: no-preference)': {
			animation: opacityOut,
			animationDuration: '150ms',
			animationTimingFunction: 'ease'
		}
	}),
	overlay: css({
		position: 'fixed',
		zIndex: 1052,
		right: 0,
		left: 0,
		bottom: 0,
		top: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.4)'
	}),
	content: css({
		position: 'fixed',
		left: '50%',
		translate: '-50% 0',
		top: '8rem',
		zIndex: 1053,
		backgroundColor: 'var(--modal-content-bg)',
		color: 'var(--text-color)',

		display: 'flex',
		flexDirection: 'column',

		justifyContent: 'space-between',
		'@media (prefers-reduced-motion: no-preference)': {
			animation: scaleIn,
			animationDuration: '150ms',
			animationTimingFunction: 'ease'
		}
	}),
	unmountContent: css({
		'@media (prefers-reduced-motion: no-preference)': {
			animation: scaleOut,
			animationDuration: '150ms',
			animationTimingFunction: 'ease'
		}
	}),
	centered: css({
		top: '50%',
		translate: '-50% -50%'
	}),
	closeButton: css({
		position: 'absolute',
		top: '0.5rem',
		right: '0.5rem',
		padding: '0.5rem',
		borderRadius: '0.375rem',
		marginLeft: 'auto',
		'&:hover': {
			backgroundColor: 'var(--modal-close-hover-color)'
		},
		'@media (prefers-reduced-motion: no-preference)': {
			transitionProperty: 'background-color',
			transitionDuration: '150ms',
			transitionTimingFunction: 'ease'
		}
	}),
	top: css({
		display: 'flex',
		justifyContent: 'space-between',
		columnGap: '0.625rem',
		alignItems: 'center'
	}),
	footer: css({
		marginTop: '0.625rem',
		display: 'flex',
		columnGap: '0.625rem',
		justifyContent: 'flex-end'
	}),
	sizes: {
		s: {
			header: css({
				marginBlock: '0.25rem',
				fontSize: '1rem'
			}),
			content: css({
				minWidth: '14rem',
				padding: '0.75rem',
				borderRadius: '0.5rem',
				rowGap: '0.75rem'
			})
		},
		m: {
			header: css({
				marginBlock: '0.5rem',
				fontSize: '1.125rem'
			}),
			content: css({
				minWidth: '18rem',
				padding: '1rem',
				borderRadius: '0.5rem',
				rowGap: '1rem'
			})
		},
		l: {
			header: css({
				marginBlock: '0.75rem',
				fontSize: '1.25rem'
			}),
			content: css({
				minWidth: '22rem',
				padding: '1.5rem',
				borderRadius: '0.5rem',
				rowGap: '1.25rem'
			})
		}
	}
}
