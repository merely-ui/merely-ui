import { css, keyframes } from '@/style-system'

const appearRight = keyframes({
	from: {
		opacity: 0,
		transform: 'scale(0.95) translate(-0.25rem, -50%)'
	},
	to: {
		opacity: 1,
		transform: 'scale(1) translate(0px, -50%)'
	}
})
const appearLeft = keyframes({
	from: {
		opacity: 0,
		transform: 'scale(0.95) translate(0.25rem, -50%)'
	},
	to: {
		opacity: 1,
		transform: 'scale(1) translate(0px, -50%)'
	}
})
const appearBottom = keyframes({
	from: {
		opacity: 0,
		transform: 'scale(0.95) translate(-50%, -0.25rem)'
	},
	to: {
		opacity: 1,
		transform: ' scale(1) translate(-50%, 0px)'
	}
})
const appearTop = keyframes({
	from: {
		opacity: 0,
		transform: 'scale(0.95) translate(-50%, 0.25rem)'
	},
	to: {
		opacity: 1,
		transform: 'scale(1) translate(-50%, 0px)'
	}
})

export const HintRecipe = {
	base: css({
		display: 'inline-block',
		alignSelf: 'flex-start',
		flexGrow: 0,
		position: 'relative'
	}),
	right: css({
		left: 'calc(100% + 0.75rem)',
		top: '50%',
		transform: 'translateY(-50%)',
		'@media (prefers-reduced-motion: no-preference)': {
			animation: `${appearRight} 150ms ease`
		}
	}),
	unmount_right: css({
		opacity: 0,
		transform: 'scale(0.95) translate(-0.25rem, -50%)'
	}),
	bottom: css({
		left: '50%',
		top: 'calc(100% + 0.75rem)',
		transform: 'translateX(-50%)',
		'@media (prefers-reduced-motion: no-preference)': {
			animation: `${appearBottom} 150ms ease`
		}
	}),
	unmount_bottom: css({
		opacity: 0,
		transform: 'scale(0.95) translate(-50%, -0.25rem)'
	}),
	left: css({
		top: '50%',
		right: 'calc(100% + 0.75rem)',
		transform: 'translateY(-50%)',
		'@media (prefers-reduced-motion: no-preference)': {
			animation: `${appearLeft} 150ms ease`
		}
	}),
	unmount_left: css({
		opacity: 0,
		transform: 'scale(0.95) translate(0.25rem, -50%)'
	}),
	top: css({
		left: '50%',
		bottom: 'calc(100% + 0.75rem)',
		transform: 'translateX(-50%)',
		'@media (prefers-reduced-motion: no-preference)': {
			animation: `${appearTop} 150ms ease`
		}
	}),
	unmount_top: css({
		opacity: 0,
		transform: 'scale(0.95) translate(-50%, 0.25rem)'
	}),
	content: css({
		position: 'absolute',
		zIndex: 100,

		color: 'var(--text-color-inverted)',
		backgroundColor: 'var(--hint-bg)',

		whiteSpace: 'nowrap',
		'@media (prefers-reduced-motion: no-preference)': {
			transitionDuration: '150ms',
			animationDuration: '150ms'
		}
	}),
	sizes: {
		s: {
			content: css({
				padding: '0.4rem 0.6rem',
				borderRadius: '0.2rem',
				fontSize: '0.875rem'
			})
		},
		m: {
			content: css({
				padding: '0.5rem 0.75rem',
				borderRadius: '0.25rem',
				fontSize: '1rem'
			})
		},
		l: {
			content: css({
				padding: '0.6rem 0.875rem',
				borderRadius: '0.3rem',
				fontSize: '1.125rem'
			})
		}
	}
}
