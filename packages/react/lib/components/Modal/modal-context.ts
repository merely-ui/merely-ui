import { createContext, useContext } from 'react'

type ModalContextType = {
	isOpen: boolean
	onClose: () => void
	isUnmounting: boolean
}

export const ModalContext = createContext<ModalContextType>({
	isOpen: false,
	onClose: () => {},
	isUnmounting: false
})

export const useModalContext = () => useContext(ModalContext)
