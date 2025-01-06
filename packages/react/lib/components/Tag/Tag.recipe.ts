import { css } from '@/style-system'

export const TagRecipe = {
	base: css({
		display: 'inline-flex',
		alignItems: 'center'
	}),
	variants: {
		outline: css({
			backgroundColor: 'transparent',
			border: '1px solid var(--text-color)',
			color: 'var(--text-color)'
		}),
		solid: css({
			backgroundColor: 'var(--text-color)',
			color: 'var(--text-color-inverted)'
		})
	},
	right: css({ marginLeft: '0.25rem' }),
	left: css({ marginRight: '0.25rem' }),
	sizes: {
		s: css({
			borderRadius: '0.875rem',
			fontSize: '0.875rem',
			padding: '0.25rem 0.625rem'
		}),
		m: css({
			borderRadius: '1rem',
			padding: '0.5rem 0.875rem'
		}),
		l: css({
			borderRadius: '1.25rem',
			fontSize: '1.125rem',
			padding: '0.75rem 1.25rem'
		})
	}
}
