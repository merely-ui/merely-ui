import { StyleProps } from '../theme-props'

export interface Conditions {
	/** `&:is(:hover, [data-hover]):not(:disabled, [data-disabled])` */
	_hover: StyleProps
	/** `&:is(:active, [data-active]):not(:disabled, [data-disabled])` */
	_active: StyleProps
	/** `&:is(:focus, [data-focus])` */
	_focus: StyleProps
	/** `&:is(:focus-within, [data-focus-within])` */
	_focusWithin: StyleProps
	/** `&:is(:focus-visible, [data-focus-visible])` */
	_focusVisible: StyleProps
	/** `&:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])` */
	_disabled: StyleProps
	/** `&:visited` */
	_visited: StyleProps
	/** `&:target` */
	_target: StyleProps
	// /** `&:is([data-readonly], [aria-readonly=true], [readonly])` */
	// _readOnly: Partial<ThemeProps>
	/** `&:read-write` */
	_readWrite: StyleProps
	/** `&:is(:empty, [data-empty])` */
	_empty: StyleProps
	/** `&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])` */
	_checked: StyleProps
	/** `&:enabled` */
	_enabled: StyleProps
	/** `&:is([aria-expanded=true])` */
	_expanded: StyleProps
	/** `&::before` */
	_before: StyleProps
	/** `&::after` */
	_after: StyleProps
	/** `&::first-letter` */
	_firstLetter: StyleProps
	/** `&::first-line` */
	_firstLine: StyleProps
	/** `&::marker` */
	_marker: StyleProps
	/** `&::selection` */
	_selection: StyleProps
	/** `&::file-selector-button` */
	_file: StyleProps
	/** `&::backdrop` */
	_backdrop: StyleProps
	/** `&:first-of-type` */
	_first: StyleProps
	/** `&:last-of-type` */
	_last: StyleProps
	/** `&:not(:first-of-type)` */
	_notFirst: StyleProps
	/** `&:not(:last-of-type)` */
	_notLast: StyleProps
	/** `&:only-child` */
	_only: StyleProps
	/** `&:nth-of-type(even)` */
	_even: StyleProps
	/** `&:nth-of-type(odd)` */
	_odd: StyleProps
	/** `.peer:is(:focus, [data-focus]) ~ &` */
	_peerFocus: StyleProps
	/** `.peer:is(:hover, [data-hover]):not(:disabled, [data-disabled]) ~ &` */
	_peerHover: StyleProps
	/** `.peer:is(:active, [data-active]):not(:disabled, [data-disabled]) ~ &` */
	_peerActive: StyleProps
	/** `.peer:focus-within ~ &` */
	_peerFocusWithin: StyleProps
	/** `.peer:is(:focus-visible, [data-focus-visible]) ~ &` */
	_peerFocusVisible: StyleProps
	/** `.peer:is(:disabled, [disabled], [data-disabled]) ~ &` */
	_peerDisabled: StyleProps
	/** `.peer:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) ~ &` */
	_peerChecked: StyleProps
	/** `.peer:is(:invalid, [data-invalid], [aria-invalid=true]) ~ &` */
	_peerInvalid: StyleProps
	// /** `.peer:is([aria-expanded=true], [data-expanded], [data-state=expanded]) ~ &` */
	// _peerExpanded: Partial<ThemeProps>
	/** `.peer:placeholder-shown ~ &` */
	_peerPlaceholderShown: StyleProps
	/** `.group:is(:focus, [data-focus]) &` */
	_groupFocus: StyleProps
	/** `.group:is(:hover, [data-hover]):not(:disabled, [data-disabled]) &` */
	_groupHover: StyleProps
	/** `.group:is(:active, [data-active]):not(:disabled, [data-disabled]) &` */
	_groupActive: StyleProps
	/** `.group:focus-within &` */
	_groupFocusWithin: StyleProps
	/** `.group:is(:focus-visible, [data-focus-visible]) &` */
	_groupFocusVisible: StyleProps
	/** `.group:is(:disabled, [disabled], [data-disabled]) &` */
	_groupDisabled: StyleProps
	/** `.group:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) &` */
	_groupChecked: StyleProps
	// /** `.group:is([aria-expanded=true], [data-expanded], [data-state=expanded]) &` */
	// _groupExpanded: Partial<ThemeProps>
	/** `.group:invalid &` */
	_groupInvalid: StyleProps
	/** `&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])` */
	_indeterminate: StyleProps
	// /** `&:is([data-required], [aria-required=true])` */
	// _required: Partial<ThemeProps>
	// /** `&:is([data-valid], [data-state=valid])` */
	// _valid: Partial<ThemeProps>
	// /** `&:is([data-invalid], [aria-invalid=true], [data-state=invalid])` */
	// _invalid: Partial<ThemeProps>
	/** `&:autofill` */
	_autofill: StyleProps
	/** `&:in-range` */
	_inRange: StyleProps
	/** `&:out-of-range` */
	_outOfRange: StyleProps
	/** `&::placeholder, &[data-placeholder]` */
	_placeholder: StyleProps
	/** `&:is(:placeholder-shown, [data-placeholder-shown])` */
	_placeholderShown: StyleProps
	// /** `&:is([aria-pressed=true], [data-pressed])` */
	// _pressed: Partial<ThemeProps>
	/** `&:is([aria-selected=true])` */
	_selected: StyleProps
	// /** `&:is([aria-grabbed=true], [data-grabbed])` */
	// _grabbed: Partial<ThemeProps>
	/** `&:default` */
	_default: StyleProps
	/** `&:optional` */
	_optional: StyleProps
	// /** `&:is([open], [data-open], [data-state=open])` */
	// _open: Partial<ThemeProps>
	// /** `&:is([closed], [data-closed], [data-state=closed])` */
	// _closed: Partial<ThemeProps>
	/** `&is(:fullscreen)` */
	_fullscreen: StyleProps
	// /** `&:is([data-loading], [aria-busy=true])` */
	// _loading: Partial<ThemeProps>
	// /** `&:is([hidden], [data-hidden])` */
	// _hidden: Partial<ThemeProps>
	/** `@media (prefers-reduced-motion: reduce)` */
	_motionReduce: StyleProps
	/** `@media (prefers-reduced-motion: no-preference)` */
	_motionSafe: StyleProps
	/** `@media print` */
	_print: StyleProps
	/** `@media (orientation: landscape)` */
	_landscape: StyleProps
	/** `@media (orientation: portrait)` */
	_portrait: StyleProps
	/** ` &.dark, .dark &` */
	_dark: StyleProps
	/** ` &.light, .light &` */
	_light: StyleProps
	/** `@media (prefers-color-scheme: dark)` */
	_mediaDark: StyleProps
	/** `@media (prefers-color-scheme: light)` */
	_mediaLight: StyleProps
	/** `@media (forced-colors: active)` */
	_highContrast: StyleProps
	/** `@media (prefers-contrast: less)` */
	_lessContrast: StyleProps
	/** `@media (prefers-contrast: more)` */
	_moreContrast: StyleProps
	/** `&::-webkit-scrollbar` */
	_scrollbar: StyleProps
	/** `&::-webkit-scrollbar-thumb` */
	_scrollbarThumb: StyleProps
	/** `&::-webkit-scrollbar-track` */
	_scrollbarTrack: StyleProps
	// /** `&[data-orientation=horizontal]` */
	// _horizontal: Partial<ThemeProps>
	// /** `&[data-orientation=vertical]` */
	// _vertical: Partial<ThemeProps>
}
