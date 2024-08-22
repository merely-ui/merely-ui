import { createContext, Dispatch, SetStateAction, useContext } from 'react'

type SelectContextType = {
	value: string
	setValue: Dispatch<SetStateAction<string>>
	displayValue: string
	setDisplayValue: Dispatch<SetStateAction<string>>
	isExpanded: boolean
	setIsExpanded: Dispatch<SetStateAction<boolean>>
	keyboardFocus: boolean
	// setKeyboardFocus: Dispatch<SetStateAction<boolean>>
}

export const SelectContext = createContext<SelectContextType>({
	isExpanded: false,
	setIsExpanded: value => {},
	setValue: value => {},
	value: '',
	displayValue: '',
	setDisplayValue: value => {},
	keyboardFocus: false
	// setKeyboardFocus: value => {}
})

export const useSelect = () => useContext(SelectContext)
