import { css } from '@/style-system'

export const TextRecipe = {
	base: css({ all: 'unset', color: 'var(--text-color)' }),
	sizes: {
		xs: css({ fontSize: '0.75rem' }),
		s: css({ fontSize: '0.875rem' }),
		m: css({ fontSize: '1rem' }),
		l: css({ fontSize: '1.125rem' }),
		xl: css({ fontSize: '1.25rem' }),
		'2xl': css({ fontSize: '1.5rem' }),
		'3xl': css({ fontSize: '1.75rem' })
	}
}
