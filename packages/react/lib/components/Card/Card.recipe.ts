import { css } from '@/style-system'

export const CardRecipe = {
	base: css({
		backgroundColor: 'var(--card-bg)',
		color: 'var(--text-color)',
		border: '1px solid var(--card-border)',
		borderRadius: '0.375rem'
	}),
	sizes: {
		s: css({ fontSize: '0.875rem', padding: '0.625rem' }),
		m: css({ fontSize: '1rem', padding: '1rem' }),
		l: css({
			fontSize: '1.125rem',
			padding: '1.5rem',
			borderRadius: '0.625rem'
		})
	}
}
