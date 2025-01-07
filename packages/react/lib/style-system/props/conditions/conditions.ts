import { Conditions } from './conditions.interface'

interface ConditionItem {
	property: keyof Conditions
	cssQuery: string
}

export const ConditionsQueries: ConditionItem[] = [
	{
		property: '_hover',
		cssQuery: '&:is(:hover, [data-hover]):not(:disabled, [data-disabled])'
	},
	{
		property: '_active',
		cssQuery: '&:is(:active, [data-active]):not(:disabled, [data-disabled])'
	},
	{
		property: '_focus',
		cssQuery: '&:is(:focus, [data-focus])'
	},
	{
		property: '_focusWithin',
		cssQuery: '&:is(:focus-within, [data-focus-within])'
	},
	{
		property: '_focusVisible',
		cssQuery: '&:is(:focus-visible, [data-focus-visible])'
	},
	{
		property: '_disabled',
		cssQuery:
			'&:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])'
	},
	{
		property: '_visited',
		cssQuery: '&:visited'
	},
	{
		property: '_target',
		cssQuery: '&:target'
	},
	{
		property: '_readWrite',
		cssQuery: '&:read-write'
	},
	{
		property: '_empty',
		cssQuery: '&:is(:empty, [data-empty])'
	},
	{
		property: '_checked',
		cssQuery:
			'&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]'
	},
	{
		property: '_enabled',
		cssQuery: '&:enabled'
	},
	{
		property: '_before',
		cssQuery: '&::before'
	},
	{
		property: '_after',
		cssQuery: '&::after'
	},
	{
		property: '_firstLetter',
		cssQuery: '&::first-letter'
	},
	{
		property: '_firstLine',
		cssQuery: '&::first-line'
	},
	{
		property: '_marker',
		cssQuery: '&::marker'
	},
	{
		property: '_selection',
		cssQuery: '&::selection'
	},
	{
		property: '_file',
		cssQuery: '&::file-selector-button'
	},
	{
		property: '_backdrop',
		cssQuery: '&::backdrop'
	},
	{
		property: '_first',
		cssQuery: '&:first-of-type'
	},
	{
		property: '_last',
		cssQuery: '&:last-of-type'
	},
	{
		property: '_notFirst',
		cssQuery: '&:not(:first-of-type)'
	},
	{
		property: '_notLast',
		cssQuery: '&:not(:last-of-type)'
	},
	{
		property: '_only',
		cssQuery: '&:only-child'
	},
	{
		property: '_even',
		cssQuery: '&:nth-of-type(even)'
	},
	{
		property: '_odd',
		cssQuery: '&:nth-of-type(odd)'
	},
	{
		property: '_peerFocus',
		cssQuery: '.peer:is(:focus, [data-focus]) ~ &'
	},
	{
		property: '_peerHover',
		cssQuery:
			'.peer:is(:hover, [data-hover]):not(:disabled, [data-disabled]) ~ &'
	},
	{
		property: '_peerActive',
		cssQuery:
			'.peer:is(:active, [data-active]):not(:disabled, [data-disabled]) ~ &'
	},
	{
		property: '_peerFocusWithin',
		cssQuery: '.peer:focus-within ~ &'
	},
	{
		property: '_peerFocusVisible',
		cssQuery: '.peer:is(:focus-visible, [data-focus-visible]) ~ &'
	},
	{
		property: '_peerDisabled',
		cssQuery: '.peer:is(:disabled, [disabled], [data-disabled]) ~ &'
	},
	{
		property: '_peerChecked',
		cssQuery:
			'.peer:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) ~ &'
	},
	{
		property: '_peerExpanded',
		cssQuery:
			'.peer:is([aria-expanded=true], [data-expanded], [data-state=expanded]) ~ &'
	},
	{
		property: '_peerInvalid',
		cssQuery: '.peer:is(:invalid, [data-invalid], [aria-invalid=true]) ~ &'
	},
	{
		property: '_peerPlaceholderShown',
		cssQuery: '.peer:placeholder-shown ~ &'
	},
	{
		property: '_groupFocus',
		cssQuery: '.group:is(:focus, [data-focus]) &'
	},
	{
		property: '_groupHover',
		cssQuery:
			'.group:is(:hover, [data-hover]):not(:disabled, [data-disabled]) &'
	},
	{
		property: '_groupActive',
		cssQuery:
			'.group:is(:active, [data-active]):not(:disabled, [data-disabled]) &'
	},
	{
		property: '_groupFocusWithin',
		cssQuery: '.group:focus-within &'
	},
	{
		property: '_groupFocusVisible',
		cssQuery: '.group:is(:focus-visible, [data-focus-visible]) &'
	},
	{
		property: '_groupDisabled',
		cssQuery: '.group:is(:disabled, [disabled], [data-disabled]) &'
	},
	{
		property: '_groupChecked',
		cssQuery:
			'.group:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) &'
	},
	{
		property: '_groupExpanded',
		cssQuery:
			'.group:is([aria-expanded=true], [data-expanded], [data-state=expanded]) &'
	},
	{
		property: '_groupInvalid',
		cssQuery: '.group:invalid &'
	},
	{
		property: '_indeterminate',
		cssQuery:
			'&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])'
	},
	{
		property: '_autofill',
		cssQuery: '&:autofill'
	},
	{
		property: '_inRange',
		cssQuery: '&:in-range'
	},
	{
		property: '_outOfRange',
		cssQuery: '&:out-of-range'
	},
	{
		property: '_placeholder',
		cssQuery: '&::placeholder, &[data-placeholder]'
	},
	{
		property: '_placeholderShown',
		cssQuery: '&:is(:placeholder-shown, [data-placeholder-shown])'
	},
	{
		property: '_default',
		cssQuery: '&:default'
	},
	{
		property: '_optional',
		cssQuery: '&:optional'
	},
	{
		property: '_fullscreen',
		cssQuery: '&:is(:fullscreen, [data-fullscreen])'
	},
	{
		property: '_motionReduce',
		cssQuery: '@media (prefers-reduced-motion: reduce)'
	},
	{
		property: '_motionSafe',
		cssQuery: '@media (prefers-reduced-motion: no-preference)'
	},
	{
		property: '_print',
		cssQuery: '@media print'
	},
	{
		property: '_landscape',
		cssQuery: '@media (orientation: landscape)'
	},
	{
		property: '_portrait',
		cssQuery: '@media (orientation: portrait)'
	},
	{
		property: '_dark',
		cssQuery: '&[data-theme="dark"], [data-theme="dark"] &'
	},
	{
		property: '_light',
		cssQuery: '&[data-theme="light"], [data-theme="light"] &'
	},
	{
		property: '_mediaDark',
		cssQuery: '@media (prefers-color-scheme: dark)'
	},
	{
		property: '_mediaLight',
		cssQuery: '@media (prefers-color-scheme: light)'
	},
	{
		property: '_highContrast',
		cssQuery: '@media (forced-colors: active)'
	},
	{
		property: '_lessContrast',
		cssQuery: '@media (prefers-contrast: less)'
	},
	{
		property: '_moreContrast',
		cssQuery: '@media (prefers-contrast: more)'
	},
	{
		property: '_scrollbar',
		cssQuery: '&::-webkit-scrollbar'
	},
	{
		property: '_scrollbarThumb',
		cssQuery: '&::-webkit-scrollbar-thumb'
	},
	{
		property: '_scrollbarTrack',
		cssQuery: '&::-webkit-scrollbar-track'
	},
	{
		property: '_sysDark',
		cssQuery: '@media (prefers-color-scheme: dark)'
	},
	{
		property: '_sysLight',
		cssQuery: '@media (prefers-color-scheme: light)'
	},
	{
		property: '_sm',
		cssQuery: '@media screen (min-width: 40rem)'
	},
	{
		property: '_smDown',
		cssQuery: '@media screen and (max-width: 39.9952rem)'
	},
	{
		property: '_md',
		cssQuery: '@media screen and (min-width: 48rem)'
	},
	{
		property: '_mdDown',
		cssQuery: '@media screen and (max-width: 47.9952rem)'
	},
	{
		property: '_lg',
		cssQuery: '@media screen and (min-width: 64rem)'
	},
	{
		property: '_lgDown',
		cssQuery: '@media screen and (max-width: 63.9952rem)'
	},
	{
		property: '_xl',
		cssQuery: '@media screen and (min-width: 80rem)'
	},
	{
		property: '_xlDown',
		cssQuery: '@media screen and (max-width: 79.9952rem)'
	},
	{
		property: '_2xl',
		cssQuery: '@media screen and (min-width: 96rem)'
	},
	{
		property: '_2xlDown',
		cssQuery: '@media screen and (max-width: 95.9952rem)'
	},
	{
		property: '_svg',
		cssQuery: '& :where(svg)'
	},
	{
		property: 'css',
		cssQuery: '&'
	}
]
