import { css } from '@/style-system'

export const TitleRecipe = {
	base: css({ color: 'var(--text-color)' }),
	sizes: {
		xs: css({ fontSize: '0.75rem' }),
		s: css({ fontSize: '0.9375rem' }),
		m: css({ fontSize: '1rem', fontWeight: 500 }),
		l: css({ fontSize: '1.125rem', fontWeight: 500 }),
		xl: css({ fontSize: '1.25rem', fontWeight: 600 }),
		'2xl': css({ fontSize: '1.5rem', fontWeight: 700 }),
		'3xl': css({ fontSize: '1.75rem', fontWeight: 800 })
	}
}
