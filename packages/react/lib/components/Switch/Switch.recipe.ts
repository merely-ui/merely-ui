import { css } from '@/style-system'

export const SwitchRecipe = {
	base: css({
		all: 'unset',
		cursor: 'pointer',
		display: 'block',
		backgroundColor: 'rgba(71, 73, 78, 0.65)',
		borderRadius: '1.25rem',
		position: 'relative',
		outline: '0.125rem solid transparent',
		'&:focus-visible': {
			outlineColor: 'var(--focus-border-color)'
		},
		'@media (prefers-reduced-motion: no-preference)': {
			transitionProperty: 'background-color, outline-color',
			transitionDuration: '100ms',
			transitionTimingFunction: 'ease'
		}
	}),
	toggled: css({
		backgroundColor: 'aquamarine'
	}),
	ball: css({
		display: 'block',
		borderRadius: '50%',
		backgroundColor: 'white',
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		'@media (prefers-reduced-motion: no-preference)': {
			transitionProperty: 'transform',
			transitionDuration: '100ms',
			transitionTimingFunction: 'ease'
		}
	}),
	ballToggled: css({
		transform: 'translate(100%, -50%)'
	}),
	sizes: {
		s: css({
			ball: {
				width: '0.75rem',
				height: '0.75rem'
			},
			width: '1.5rem',
			height: '1.125rem',
			paddingInline: '0.1875rem'
		}),
		m: css({
			ball: {
				width: '1rem',
				height: '1rem'
			},
			width: '2rem',
			height: '1.4375rem',
			paddingInline: '0.25rem'
		}),
		l: css({
			ball: {
				width: '1.25rem',
				height: '1.25rem'
			},
			width: '2.5rem',
			height: '1.8125rem',
			paddingInline: '0.3125rem'
		})
	},
	ballSizes: {
		s: css({
			width: '0.75rem',
			height: '0.75rem'
		}),
		m: css({
			width: '1rem',
			height: '1rem'
		}),
		l: css({
			width: '1.25rem',
			height: '1.25rem'
		})
	}
}
