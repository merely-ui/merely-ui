import { useOutsideDisclosure } from '@/hooks'
import {
	cx,
	merely,
	MerelyComponentProps,
	useDelayUnmount
} from '@/style-system'
import { focusFirstChild, focusItself } from '@/utilities/focus'
import {
	Dispatch,
	KeyboardEvent,
	ReactNode,
	SetStateAction,
	useCallback,
	useEffect,
	useId,
	useMemo,
	useRef,
	useState
} from 'react'
import { getSelectedNode } from './get-selected-node'
import { SelectContext } from './select-context'
import { SelectRecipe } from './Select.recipe'
import { SelectArrow } from './SelectArrow'

export type SelectSize = 's' | 'm' | 'l'
export type SelectVariant = 'default' | 'outline'

export interface SelectProps extends MerelyComponentProps<'div'> {
	_size?: SelectSize
	variant?: SelectVariant
	icon?: ReactNode
	value?: string
	onChangeValue?: Dispatch<SetStateAction<any>>
	placeholder?: ReactNode
	buttonProps?: MerelyComponentProps<'button'>
	listProps?: MerelyComponentProps<'ul'>
}

export const Select = (props: SelectProps) => {
	const {
		children,
		_size: size = 'm',
		variant = 'default',
		className,
		theme,
		icon,
		onChangeValue,
		placeholder,
		value: externalValue = '',
		buttonProps,
		listProps,
		...otherProps
	} = props

	const ulRef = useRef(null)
	const buttonRef = useRef(null)
	const [value, setValue] = useState(externalValue)
	const [displayValue, setDisplayValue] = useState('')
	const [keyboardFocus, setKeyboardFocus] = useState(false)

	const id = useId()

	const visibleElement = useMemo(() => {
		if (displayValue) return displayValue
		if (placeholder) return placeholder
		return 'Select'
	}, [displayValue, placeholder])

	const {
		isOpen: isExpanded,
		setIsOpen: setIsExpanded,
		toggle,
		ref
	} = useOutsideDisclosure({
		onCloseCallback: () => {
			setKeyboardFocus(false)
		}
	})

	const { shouldRender } = useDelayUnmount(isExpanded, 150)

	useEffect(() => {
		if (isExpanded) {
			const $node = getSelectedNode(ulRef.current)
			if ($node) setTimeout(() => $node.focus(), 10)
			else if (keyboardFocus) focusFirstChild(ulRef)
		}
	}, [isExpanded, keyboardFocus])

	const onButtonKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			setKeyboardFocus(true)
		}
		if (e.key === 'ArrowDown') {
			setKeyboardFocus(true)
			setIsExpanded(true)
			focusFirstChild(ulRef)
		}
	}

	const onListKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setIsExpanded(false)
			setKeyboardFocus(false)
			focusItself(buttonRef)
		}
	}

	const withOnChange = useCallback(
		(value: string) => {
			setValue(value)
			onChangeValue?.(value)
		},
		[onChangeValue]
	)

	return (
		<SelectContext.Provider
			value={{
				value,
				setValue: onChangeValue ? withOnChange : setValue,
				isExpanded,
				setIsExpanded,
				displayValue,
				setDisplayValue,
				keyboardFocus,
				size
			}}
		>
			<merely.div
				_ref={ref}
				className={cx(SelectRecipe.base, className)}
				{...otherProps}
			>
				<merely.button
					_ref={buttonRef}
					className={cx(SelectRecipe.button, SelectRecipe.sizes[size].button)}
					onClick={toggle}
					onKeyDown={onButtonKeyDown}
					role='combobox'
					aria-label='Select button'
					aria-haspopup='listbox'
					aria-expanded={isExpanded}
					aria-controls={id}
					aria-autocomplete='none'
					{...buttonProps}
				>
					<span>{visibleElement}</span>
					{icon ? icon : <SelectArrow />}
				</merely.button>
				<merely.ul
					_ref={ulRef}
					className={cx(SelectRecipe.list, SelectRecipe.sizes[size].list, {
						[SelectRecipe.expanded]: isExpanded,
						[SelectRecipe.hidden]: !shouldRender,
						[SelectRecipe.keyboardFocused]: keyboardFocus
					})}
					onKeyDown={onListKeyDown}
					tabIndex={-1}
					role='listbox'
					id={id}
					{...listProps}
				>
					{children}
				</merely.ul>
			</merely.div>
		</SelectContext.Provider>
	)
}
