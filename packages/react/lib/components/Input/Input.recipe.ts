import { css } from '@/style-system'

export const getFocusBorderColorVar = (color?: string) => {
	if (!color) return

	return css({
		'--input-focus-color': color
	})
}

export const InputRecipe = {
	base: css({
		all: 'unset',
		color: 'var(--text-color)',
		borderRadius: '0.375rem',
		backgroundColor: 'transparent',
		outline: '1px solid transparent',
		border: '1px solid var(--input-border-color)',
		'&:focus': {
			borderColor: 'var(--input-focus-color)',
			outlineColor: 'var(--input-focus-color)'
		},
		'&::placeholder': {
			fontSize: 'inherit',
			color: '#484848'
		},
		'@media (prefers-reduced-motion: no-preference)': {
			transitionTimingFunction: 'ease-in-out',
			transitionDuration: '100ms',
			transitionProperty: 'outline-color, border-color, background-color'
		}
	}),
	sizes: {
		xs: css({
			fontSize: '0.875rem',
			padding: '0.375rem 0.75rem'
		}),
		s: css({
			fontSize: '0.875rem',
			padding: '0.5rem 0.75rem'
		}),
		m: css({
			fontSize: '1rem',
			padding: '0.75rem 1rem'
		}),
		l: css({
			borderRadius: '0.5rem',
			fontSize: '1.125rem',
			padding: '0.75rem 1rem'
		}),
		xl: css({
			borderRadius: '0.5rem',
			fontSize: '1.25rem',
			padding: '0.875rem 1.125rem'
		})
	}
}
