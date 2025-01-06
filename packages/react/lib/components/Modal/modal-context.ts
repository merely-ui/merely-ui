import { createContext, useContext } from 'react'
import { ModalSize } from './Modal'

type ModalContextType = {
	isOpen: boolean
	onClose: () => void
	isUnmounting: boolean
	_size: ModalSize
	isCentered: boolean
}

export const ModalContext = createContext<ModalContextType>({
	isOpen: false,
	onClose: () => {},
	isUnmounting: false,
	_size: 'm',
	isCentered: false
})

export const useModalContext = () => useContext(ModalContext)
