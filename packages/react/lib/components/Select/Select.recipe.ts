import { css, keyframes } from '@/style-system'

const appear = keyframes({
	from: {
		opacity: 0,
		scale: 0.95,
		translate: '0 -0.5rem'
	},
	to: {
		opacity: 1,
		scale: 1,
		translate: 0
	}
})

export const SelectRecipe = {
	base: css({
		display: 'inline-block',
		position: 'relative',
		minWidth: '6.5rem'
	}),
	button: css({
		all: 'unset',
		userSelect: 'none',
		color: 'var(--text-color)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '1rem',
		boxSizing: 'border-box',
		width: '100%',
		border: '1px solid var(--select-border-color)',
		borderRadius: '0.25rem',
		outline: '1px solid transparent',
		'&:is(:focus-visible)': {
			outlineColor: 'white'
		},
		'@media (prefers-reduced-motion: no-preference)': {
			transitionProperty: 'outline-color, border-color',
			transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
			transitionDuration: '150ms',
			'&:hover': {
				borderColor: '#a9a6a6'
			}
		}
	}),
	list: css({
		all: 'unset',
		listStyleType: 'none',
		display: 'block',
		position: 'absolute',
		backgroundColor: 'var(--select-bg-color)',
		borderRadius: '0.25rem',
		border: '1px solid #2c2c2a',
		left: 0,
		right: 0,
		zIndex: 1000,
		top: 'calc(100% + 0.375rem)',
		opacity: 0,
		scale: 0.95,
		translate: '0 -0.5rem',
		minWidth: 'max-content',
		'@media (prefers-reduced-motion: no-preference)': {
			animation: `${appear} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
			transitionProperty: 'opacity, scale, translate, outline, visibility',
			transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
			transitionDuration: '150ms'
		}
	}),
	keyboardFocused: css({
		'&:focus-within': {
			outline: '0.125rem solid #eee'
		}
	}),
	expanded: css({
		opacity: 1,
		scale: 1,
		translate: 0
	}),
	hidden: css({
		display: 'none'
	}),
	option: css({
		borderRadius: '0.25rem',
		cursor: 'default',
		color: 'var(--text-color)',
		'&:is(:hover, :focus)': {
			outline: 'none',
			backgroundColor: 'var(--select-focus-bg-color)'
		},
		'@media (prefers-reduced-motion: no-preference)': {
			transitionProperty: 'background-color',
			transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
			transitionDuration: '150ms'
		}
	}),
	sizes: {
		s: {
			button: css({
				padding: '0.375rem 0.625rem',
				fontWeight: 400,
				fontSize: '0.75rem'
			}),
			list: css({
				padding: '0.125rem'
			}),
			option: css({
				padding: '0.375rem 0.5rem',
				fontSize: '0.75rem'
			})
		},
		m: {
			button: css({
				padding: '0.5rem 0.75rem',
				fontWeight: 500,
				fontSize: '0.875rem'
			}),
			list: css({
				padding: '0.2rem'
			}),
			option: css({
				padding: '0.5rem 0.625rem',
				fontSize: '0.875rem'
			})
		},
		l: {
			button: css({
				padding: '0.625rem 0.875rem',
				fontWeight: 500,
				fontSize: '1rem'
			}),
			list: css({
				padding: '0.2rem'
			}),
			option: css({
				padding: '0.625rem 0.725rem',
				fontSize: '1rem'
			})
		}
	}
}
