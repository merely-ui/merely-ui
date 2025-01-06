import { StringObject } from '@/style-system'
import { colors } from '../color-palette/colors'

export const getLightVars = (): StringObject => ({
	[`--text-color`]: colors.black,
	[`--text-color-inverted`]: colors.white,

	[`--button-bg`]: colors.gray.$900,
	[`--button-hover-bg`]: colors.gray.$700,
	[`--button-outlined-hover`]: colors.gray.$500,

	[`--card-bg`]: '#f2f2f2',
	[`--card-border`]: '#bfbfbf',

	[`--dropdown-bg`]: 'black',

	[`--hint-bg`]: colors.gray.$700,

	[`--input-border-color`]: '#cbd5e0',
	[`--input-focus-color`]: 'var(--focus-border-color)',

	[`--modal-content-bg`]: 'white',
	[`--modal-close-hover-color`]: '#dbdbdb',

	[`--textarea-border-color`]: '#cbd5e0',
	[`--textarea-focus-color`]: 'var(--focus-border-color)',

	[`--popover-bg`]: '#ececec',
	[`--popover-close-hover`]: colors.gray.$50,
	[`--popover-border`]: '#cbd5e0',

	[`--select-focus-bg-color`]: colors.gray.$50,
	[`--select-bg-color`]: '#F8F8F8',
	[`--select-border-color`]: colors.gray.$400,

	[`--code-bg`]: colors.gray.$50,
	[`--code-border`]: colors.gray.$500
})

export const getDarkVars = (): StringObject => ({
	[`--text-color`]: colors.white,
	[`--text-color-inverted`]: colors.black,

	[`--button-bg`]: colors.white,
	[`--button-hover-bg`]: '#e3e3e3',
	[`--button-outlined-hover`]: colors.gray.$400,

	[`--card-bg`]: colors.gray.$900,
	[`--card-border`]: colors.gray.$700,

	[`--dropdown-bg`]: colors.white,

	[`--hint-bg`]: '#e7e7e7',

	[`--input-border-color`]: colors.gray.$600,
	[`--input-focus-color`]: colors.white,

	[`--modal-content-bg`]: colors.gray.$900,
	[`--modal-close-hover-color`]: colors.gray.$500,

	[`--textarea-border-color`]: colors.gray.$500,
	[`--textarea-focus-color`]: colors.white,

	[`--popover-bg`]: colors.gray.$900,
	[`--popover-close-hover`]: colors.gray.$700,
	[`--popover-border`]: colors.gray.$950,

	[`--select-focus-bg-color`]: colors.gray.$600,
	[`--select-bg-color`]: colors.gray.$900,
	[`--select-border-color`]: colors.gray.$400,

	[`--code-bg`]: colors.gray.$900,
	[`--code-border`]: colors.gray.$600
})

export const getGlobalVars = (): StringObject => ({
	'@layer globals': { [`--focus-border-color`]: '#5c9fdd' }
})
