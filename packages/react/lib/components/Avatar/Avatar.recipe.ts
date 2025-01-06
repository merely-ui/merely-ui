import { css } from '@/style-system'

export const AvatarRecipe = {
	base: css({
		alignSelf: 'flex-start',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		aspectRatio: 1,
		backgroundColor: '#eee',
		borderRadius: '50%'
	}),
	badge: css({
		width: '0.75rem',
		aspectRatio: 1,
		borderRadius: '50%',
		position: 'absolute',
		outline: '0.375rem solid transparent'
	}),
	variants: {
		online: css({
			backgroundColor: 'chartreuse'
		}),
		offline: css({
			backgroundColor: 'red'
		}),
		sleep: css({
			backgroundColor: 'orange'
		})
	},
	placement: {
		'top-right': css({
			right: '0rem',
			top: '0rem'
		}),
		'top-left': css({
			left: '0rem',
			top: '0rem'
		}),
		'bottom-right': css({
			right: '0rem',
			bottom: '0rem'
		}),
		'bottom-left': css({
			left: '0rem',
			bottom: '0rem'
		})
	},
	sizes: {
		s: css({ padding: '0.275rem' }),
		m: css({ padding: '0.5rem' }),
		l: css({ padding: '1rem' })
	}
}
