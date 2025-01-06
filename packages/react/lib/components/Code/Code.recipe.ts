import { css } from '@emotion/css'

export const CodeRecipe = {
	base: css({
		all: 'unset',
		backgroundColor: 'var(--code-bg)',
		color: 'var(--text-color)',
		border: '1px solid var(--code-border)',
		borderRadius: '0.375rem',
		alignSelf: 'flex-start',
		display: 'flex',
		placeItems: 'center'
	}),
	sizes: {
		s: css({
			padding: '0.25rem',
			fontSize: '0.75rem'
		}),
		m: css({
			padding: '0.25rem',
			fontSize: '0.875rem'
		}),
		l: css({
			padding: '0.25rem',
			fontSize: '1rem'
		})
	}
}
