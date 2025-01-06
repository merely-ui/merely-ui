import { css } from '@/style-system'

export const PopoverRecipe = {
	top: css({
		translate: '0 0.25rem'
	}),
	bottom: css({
		translate: '0 -0.25rem'
	}),
	right: css({ translate: '-0.25rem 0' }),
	left: css({
		translate: '0.25rem 0'
	}),
	hidden: css({
		visibility: 'hidden',
		pointerEvents: 'none',
		opacity: 0
	}),
	open: css({
		opacity: 1,
		scale: 1,
		translate: '0 0'
	}),
	content: css({
		position: 'absolute',
		isolation: 'isolate',
		zIndex: 1052,
		color: 'var(--text-color)',
		backgroundColor: 'var(--popover-bg)',
		border: '1px solid var(--popover-border)',
		borderRadius: '0.375rem',
		padding: '0.625rem 0.875rem',
		display: 'flex',
		flexDirection: 'column',
		rowGap: '0.625rem',
		minWidth: '15rem',
		'@media (prefers-reduced-motion: no-preference)': {
			transitionDuration: '150ms',
			transitionTimingFunction: 'ease'
		}
	}),
	headerTop: css({
		display: 'flex',
		justifyContent: 'space-between',
		columnGap: '0.625rem',
		alignItems: 'center'
	}),
	closeButton: css({
		padding: '0.5rem',
		borderRadius: '0.375rem',
		position: 'absolute',
		right: '0.5rem',
		top: '0.5rem',
		'&:hover': { backgroundColor: 'var(--popover-close-hover)' },
		'@media (prefers-reduced-motion: no-preference)': {
			transitionProperty: 'background-color',
			transitionDuration: '150ms',
			transitionTimingFunction: 'ease'
		}
	}),
	header: css({ fontSize: '1.125rem', marginBlock: '0.25rem' }),
	footer: css({
		marginTop: '0.25rem',
		display: 'flex',
		columnGap: '0.625rem',
		justifyContent: 'flex-end'
	}),
	s: css({ fontSize: '0.875rem', padding: '0.375rem 1rem' }),
	m: css({ padding: '0.5rem 1.25rem' }),
	l: css({
		fontSize: '1.125rem',
		padding: '0.625rem 1.75rem'
	})
}
