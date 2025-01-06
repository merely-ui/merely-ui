import { css } from '@emotion/css'

export const TextareaRecipe = {
	base: css({
		all: 'unset',
		color: 'var(--text-color)',
		resize: 'vertical',
		borderRadius: '0.625rem',
		borderBottomRightRadius: '0.25rem',
		border: '1px solid var(--textarea-border-color)',
		padding: '0.75rem',
		outline: '1px solid transparent',
		'&:focus': {
			borderColor: 'var(--textarea-focus-color)',
			outlineColor: 'var(--textarea-focus-color)'
		},
		'@media (prefers-reduced-motion: no-preference)': {
			transitionDuration: '100ms',
			transitionTimingFunction: 'ease',
			transitionProperty: 'border-color, outline-color'
		}
	})
}
