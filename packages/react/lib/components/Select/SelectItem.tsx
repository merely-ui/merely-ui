import { cx, merely, MerelyComponentProps } from '@/style-system'
import { focusItself } from '@/utilities/focus'
import {
	ElementType,
	KeyboardEvent,
	useCallback,
	useEffect,
	useMemo,
	useRef
} from 'react'
import { useSelect } from './select-context'
import { SelectRecipe } from './Select.recipe'

export type SelectItemProps<C extends ElementType = 'li'> = {
	value?: string
	selected?: boolean
} & MerelyComponentProps<C>

export const SelectItem = <C extends ElementType = 'li'>(
	props: SelectItemProps<C>
) => {
	const { children, value, selected, ...otherProps } = props

	const liRef = useRef<HTMLLIElement>(null)

	const {
		setValue,
		setIsExpanded,
		value: selectedValue,
		setDisplayValue,
		size
	} = useSelect()

	const isSelected = useMemo(() => {
		return selectedValue === children || selectedValue === value
	}, [children, selectedValue, value])

	const select = useCallback(() => {
		if (typeof children !== 'string' && value) {
			setDisplayValue(value)
			setValue(value)
		}
		if (typeof children === 'string') {
			setDisplayValue(children)
			if (!value) setValue(children)
		}
		if (value) setValue(value)
		setIsExpanded(false)
	}, [children, setDisplayValue, setIsExpanded, setValue, value])

	useEffect(() => {
		if (selected) select()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onEnterKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Enter') select()
			if (e.key === 'ArrowDown' && liRef.current?.nextSibling) {
				//@ts-expect-error no typings for that
				liRef.current.nextSibling.focus()
			}
			if (e.key === 'ArrowUp' && liRef.current?.previousSibling) {
				//@ts-expect-error no typings for that
				liRef.current.previousSibling.focus()
			}
		},
		[select]
	)

	const onPointerEnter = useCallback(() => {
		focusItself<C>(liRef)
	}, [])

	return (
		<merely.li
			_ref={liRef}
			className={cx(SelectRecipe.option, SelectRecipe.sizes[size].option)}
			role='option'
			aria-selected={isSelected}
			tabIndex={0}
			onKeyDown={onEnterKeyDown}
			onPointerEnter={onPointerEnter}
			onClick={select}
			{...otherProps}
		>
			{children}
		</merely.li>
	)
}
