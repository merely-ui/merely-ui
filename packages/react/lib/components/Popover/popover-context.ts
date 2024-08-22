import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { PopoverDirection } from './Popover'

type PopoverContextType = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	direction: PopoverDirection
	isUnmounting: boolean
}

export const PopoverContext = createContext<PopoverContextType>({
	isOpen: false,
	setIsOpen: () => {},
	direction: 'left',
	isUnmounting: false
})

export const usePopoverContext = () => useContext(PopoverContext)
