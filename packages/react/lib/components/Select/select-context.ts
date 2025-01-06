import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { SelectSize } from './Select'

type SelectContextType = {
	value: string
	setValue: (value: string) => void | Dispatch<SetStateAction<string>>
	displayValue: string
	setDisplayValue: Dispatch<SetStateAction<string>>
	isExpanded: boolean
	setIsExpanded: Dispatch<SetStateAction<boolean>>
	keyboardFocus: boolean
	size: SelectSize
}

export const SelectContext = createContext<SelectContextType>({
	isExpanded: false,
	setIsExpanded: value => {},
	setValue: value => {},
	value: '',
	displayValue: '',
	setDisplayValue: value => {},
	keyboardFocus: false,
	size: 'm'
})

export const useSelect = () => useContext(SelectContext)
