'use client'

import { useOutsideDisclosure } from '@/hooks'
import {
	cx,
	merely,
	MerelyComponentProps,
	useDelayUnmount
} from '@/style-system'
import { useColorMode } from '@/theme'
import {
	Dispatch,
	FC,
	KeyboardEvent,
	PropsWithChildren,
	ReactNode,
	SetStateAction,
	useCallback,
	useEffect,
	useId,
	useMemo,
	useRef,
	useState
} from 'react'
import styles from './Select.module.css'
import { SelectArrow } from './SelectArrow'
import { focusFirstChild, focusItself } from './focus'
import { getSelectedNode } from './get-selected-node'
import { SelectContext } from './select-context'

export type SelectSize = 's' | 'm' | 'l'
export type SelectVariant = 'default' | 'outline'

export interface SelectProps
	extends Omit<MerelyComponentProps<'div'>, 'onChange'> {
	_size?: SelectSize
	variant?: SelectVariant
	icon?: ReactNode
	value?: string
	onChange?: Dispatch<SetStateAction<any>>
	placeholder?: ReactNode
	buttonProps?: MerelyComponentProps<'button'>
	listProps?: MerelyComponentProps<'ul'>
}

export const Select: FC<PropsWithChildren<SelectProps>> = ({
	children,
	_size = 'm',
	variant = 'default',
	className,
	theme,
	icon,
	onChange,
	placeholder,
	value: externalValue = '',
	buttonProps,
	listProps,
	...otherProps
}) => {
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
	} = useOutsideDisclosure(() => {
		setKeyboardFocus(false)
	})
	const { shouldRender } = useDelayUnmount(isExpanded, 150)
	const { colorMode: cssTheme } = useColorMode(theme)

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
			onChange?.(value)
		},
		[onChange]
	)

	return (
		<SelectContext.Provider
			value={{
				value,
				setValue: onChange ? withOnChange : setValue,
				isExpanded,
				setIsExpanded,
				displayValue,
				setDisplayValue,
				keyboardFocus
			}}
		>
			<merely.div
				_ref={ref}
				className={cx(
					styles.select,
					styles['size_' + _size],
					styles[variant],
					styles[cssTheme],
					className
				)}
				{...otherProps}
			>
				<merely.button
					_ref={buttonRef}
					className={styles.button}
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
					className={cx(styles.list, {
						[styles.expanded]: isExpanded,
						[styles.hidden]: !shouldRender,
						[styles.keyboardFocused]: keyboardFocus
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
