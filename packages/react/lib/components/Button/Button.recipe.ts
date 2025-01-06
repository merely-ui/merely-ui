import { css } from '@/style-system'

export const ButtonRecipe = {
	base: css({
		all: 'unset',
		cursor: 'pointer',
		borderRadius: '0.375rem',
		fontSize: '1rem',
		fontWeight: 500,
		display: 'flex',
		justifyContent: 'center',
		outline: '0.125rem solid transparent',
		'&:focus-visible': {
			outlineColor: 'var(--focus-border-color)'
		},
		'&:disabled': {
			cursor: 'not-allowed'
		},
		'@media (prefers-reduced-motion: no-preference)': {
			transitionTimingFunction: 'ease',
			transitionDuration: '150ms',
			transitionProperty: 'background-color, color, outline-color, border-color'
		}
	}),
	sizes: {
		xs: css({ fontSize: '0.875rem', padding: '0.25rem 0.625rem' }),
		s: css({ fontSize: '0.875rem', padding: '0.5rem 1rem' }),
		m: css({ padding: '0.5rem 1.25rem' }),
		l: css({ fontSize: '1.125rem', padding: '0.625rem 1.75rem' }),
		xl: css({
			fontSize: '1.25rem',
			fontWeight: 600,
			padding: '0.75rem 2.25rem'
		})
	},
	variants: {
		default: css({
			backgroundColor: 'var(--button-bg)',
			color: 'var(--text-color-inverted)',
			'&:hover:not(:disabled)': {
				backgroundColor: 'var(--button-hover-bg)'
			}
		}),
		outline: css({
			backgroundColor: 'transparent',
			border: '1px solid var(--text-color)',
			color: 'var(--text-color)',
			'&:hover': {
				backgroundColor: 'transparent',
				borderColor: 'var(--button-outlined-hover)',
				color: 'var(--button-outlined-hover)'
			}
		}),
		clear: css({})
	}
}
