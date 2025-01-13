import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import {
	Button,
	Card,
	Code,
	Flex,
	Popover,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger
} from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverCloseButton, 
  PopoverHeader, 
  PopoverBody, 
  PopoverFooter
} from "@merely-ui/react"`
const usage = `<Popover>
  <PopoverTrigger asChild>
    <Button>Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverCloseButton />
    <PopoverHeader>Popover Header</PopoverHeader>
    <PopoverBody>Popover Body</PopoverBody>
    <PopoverFooter>
      <Button>Click</Button>
    </PopoverFooter>
  </PopoverContent>
</Popover>`
const sizes = `<Flex>
  <Popover _size='s'>
    <PopoverTrigger asChild>
      <Button>Open popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverCloseButton />
      <PopoverHeader>Popover Header</PopoverHeader>
      <PopoverBody>Popover Body</PopoverBody>
      <PopoverFooter>
        <Button>Click</Button>
      </PopoverFooter>
    </PopoverContent>
  </Popover>
  <Popover _size='m'>
    <PopoverTrigger asChild>
      <Button>Open popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverCloseButton />
      <PopoverHeader>Popover Header</PopoverHeader>
      <PopoverBody>Popover Body</PopoverBody>
      <PopoverFooter>
        <Button>Click</Button>
      </PopoverFooter>
    </PopoverContent>
  </Popover>
  <Popover _size='l'>
    <PopoverTrigger asChild>
      <Button>Open popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverCloseButton />
      <PopoverHeader>Popover Header</PopoverHeader>
      <PopoverBody>Popover Body</PopoverBody>
      <PopoverFooter>
        <Button>Click</Button>
      </PopoverFooter>
    </PopoverContent>
  </Popover>
</Flex>`
const direction = `<Popover _direction='top'>
  <PopoverTrigger asChild>
    <Button>Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverCloseButton />
    <PopoverHeader>Popover Header</PopoverHeader>
    <PopoverBody>Popover Body</PopoverBody>
    <PopoverFooter>
      <Button>Click</Button>
    </PopoverFooter>
  </PopoverContent>
</Popover>`

export default function PopoverDocs() {
	return (
		<div>
			<DocTitle>Popover</DocTitle>
			<DocText mb={'5rem'}>Popover is a component with popup window</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' _size='2xl' mb={12} mt={32}>
				Usage
			</DocSubTitle>
			<Card mb={8}>
				<Popover>
					<PopoverTrigger asChild>
						<Button>Open popover</Button>
					</PopoverTrigger>
					<PopoverContent>
						<PopoverCloseButton />
						<PopoverHeader>Popover Header</PopoverHeader>
						<PopoverBody>Popover Body</PopoverBody>
						<PopoverFooter>
							<Button>Click</Button>
						</PopoverFooter>
					</PopoverContent>
				</Popover>
			</Card>
			<Shiki code={usage} />
			<DocSubTitle id='sizes' mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>_size</Code> prop is changing size of the
				Popover component.
			</DocText>
			<Card mb={8}>
				<Flex flexWrap='wrap'>
					<Popover>
						<PopoverTrigger asChild>
							<Button>Open popover</Button>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverCloseButton />
							<PopoverHeader>Popover Header</PopoverHeader>
							<PopoverBody>Popover Body</PopoverBody>
							<PopoverFooter>
								<Button>Click</Button>
							</PopoverFooter>
						</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger asChild>
							<Button>Open popover</Button>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverCloseButton />
							<PopoverHeader>Popover Header</PopoverHeader>
							<PopoverBody>Popover Body</PopoverBody>
							<PopoverFooter>
								<Button>Click</Button>
							</PopoverFooter>
						</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger asChild>
							<Button>Open popover</Button>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverCloseButton />
							<PopoverHeader>Popover Header</PopoverHeader>
							<PopoverBody>Popover Body</PopoverBody>
							<PopoverFooter>
								<Button>Click</Button>
							</PopoverFooter>
						</PopoverContent>
					</Popover>
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='direction' mt={32}>
				Direction
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>_direction</Code> prop is changing size of
				the Popover component.
			</DocText>
			<Card mb={8}>
				<Popover _direction='top'>
					<PopoverTrigger asChild>
						<Button>Open popover</Button>
					</PopoverTrigger>
					<PopoverContent>
						<PopoverCloseButton />
						<PopoverHeader>Popover Header</PopoverHeader>
						<PopoverBody>Popover Body</PopoverBody>
						<PopoverFooter>
							<Button>Click</Button>
						</PopoverFooter>
					</PopoverContent>
				</Popover>
			</Card>
			<Shiki code={direction} />

			<Flex justifyContent='space-between' my={64}>
				<Previous text='Modal' link={root.getComponentDocLink('modal')} />
				<Next text='Select' link={root.getComponentDocLink('select')} />
			</Flex>
		</div>
	)
}
