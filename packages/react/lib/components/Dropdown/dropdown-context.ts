import { createContext, Dispatch, SetStateAction, useContext } from 'react'
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

export const useDropdownContext = () => useContext(DropdownContext)
