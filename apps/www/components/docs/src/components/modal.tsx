import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Button, Card, Code, Flex } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { 
  Modal,
  ModalOverlay,
  ModalContent, 
  ModalCloseButton, 
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from "@merely-ui/react"`
const usage = `<Modal>
  <ModalOverlay />
  <ModalContent>
    <ModalCloseButton />
    <ModalHeader>Modal Header</ModalHeader>
    <ModalBody>Modal Body</ModalBody>
    <ModalFooter>
      <Button>Click</Button>
    </ModalFooter>
  </ModalContent>
</Modal>`
const sizes = `<Flex>
  <Modal _size='s'>
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton />
      <ModalHeader>Modal Header</ModalHeader>
      <ModalBody>Modal Body</ModalBody>
      <ModalFooter>
        <Button>Click</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  <Modal _size='m'>
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton />
      <ModalHeader>Modal Header</ModalHeader>
      <ModalBody>Modal Body</ModalBody>
      <ModalFooter>
        <Button>Click</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  <Modal _size='l'>
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton />
      <ModalHeader>Modal Header</ModalHeader>
      <ModalBody>Modal Body</ModalBody>
      <ModalFooter>
        <Button>Click</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
</Flex>`
const centered = `<Modal isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalCloseButton />
    <ModalHeader>Modal Header</ModalHeader>
    <ModalBody>Modal Body</ModalBody>
    <ModalFooter>
      <Button>Click</Button>
    </ModalFooter>    
  </ModalContent>
</Modal>`

export default function ModalDocs() {
	return (
		<div>
			<DocTitle>Modal</DocTitle>
			<DocText mb={'5rem'}>Modal is a component with dialog window</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' _size='2xl' mb={12} mt={32}>
				Usage
			</DocSubTitle>
			<Card mb={8}>
				<Button>Open modal</Button>
			</Card>
			<Shiki code={usage} />
			<DocSubTitle id='sizes' mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>_size</Code> prop is changing size of the
				Modal component.
			</DocText>
			<Card mb={8}>
				<Flex flexWrap='wrap'>
					<Button>Open modal S</Button>
					<Button>Open modal M</Button>
					<Button>Open modal L</Button>
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='centered' mt={32}>
				Centered Modal
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>isCentered</Code> prop used to center Modal
				content
			</DocText>
			<Card mb={8}>
				<Button>Open modal</Button>
			</Card>
			<Shiki code={centered} />

			<Flex justifyContent='space-between' my={64}>
				<Previous text='Hint' link={root.getComponentDocLink('hint')} />
				<Next text='Popover' link={root.getComponentDocLink('popover')} />
			</Flex>
		</div>
	)
}
