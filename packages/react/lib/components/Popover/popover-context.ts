import {
	createContext,
	Dispatch,
	RefObject,
	SetStateAction,
	useContext
} from 'react'
import { PopoverDirection } from './Popover'

type PopoverContextType = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	direction: PopoverDirection
	x: number
	y: number
	positioningRef: RefObject<HTMLElement> | null
	id: string
}

export const PopoverContext = createContext<PopoverContextType>({
	isOpen: false,
	setIsOpen: () => {},
	direction: 'left',
	x: 0,
	y: 0,
	positioningRef: null,
	id: ''
})

export const usePopoverContext = () => useContext(PopoverContext)
