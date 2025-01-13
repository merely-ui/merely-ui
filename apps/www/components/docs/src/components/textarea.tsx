import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Card, Flex, Textarea } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Textarea } from "@merely-ui/react"`

const controlled = `import { useState } from "react"
import { Textarea } from "@merely-ui/react"

export default function MyTextarea() {
  const [value, setValue] = useState("")

  return (
    <Card>
      <Textarea value={value} onChange={setValue} />
    </Card>
  )
}`

const sizes = `<Flex alignItems='center'>
  <Textarea _size='s' />
  <Textarea _size='m' />
  <Textarea _size='l' />
</Flex>`

export default function TextareaDocs() {
	return (
		<div>
			<DocTitle>Textarea</DocTitle>
			<DocText mb={'5rem'}>
				The Textarea component in React is a multi-line text input control that
				allows users to enter and edit long-form text content.
			</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' _size='2xl' mb={12} mt={32}>
				Usage
			</DocSubTitle>
			<Card>
				<Textarea />
			</Card>
			<DocSubTitle id='sizes' _size='2xl' mb={8} mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>`_size` prop is changing size of the textarea.</DocText>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Textarea _size='s' />
					<Textarea _size='m' />
					<Textarea _size='l' />
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='controlled-usage' _size='2xl' mb={8} mt={32}>
				Controlled Usage
			</DocSubTitle>
			<DocText mb={16}>
				Below you can see example of controlled textarea usage.
			</DocText>
			<Card mb={8}>
				<Textarea />
			</Card>
			<Shiki code={controlled} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Input' link={root.getComponentDocLink('input')} />
				<Next text='Hint' link={root.getComponentDocLink('hint')} />
			</Flex>
		</div>
	)
}
