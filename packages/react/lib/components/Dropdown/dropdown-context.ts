import { createContext, Dispatch, SetStateAction } from 'react'
import { DropdownDirection } from './Dropdown'

type DropdownContextType = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	direction: DropdownDirection
	isUnmounting: boolean
}

export const DropdownContext = createContext<DropdownContextType>({
	isOpen: false,
	setIsOpen: () => {},
	direction: 'bottom',
	isUnmounting: false
})
