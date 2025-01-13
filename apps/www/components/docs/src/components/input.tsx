import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Card, Flex, Input } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Input } from "@merely-ui/react"`

const sizes = `<Flex alignItems='flex-start' flexDir='column'>
  <Input placeholder='The smallest' _size='xs' />
  <Input placeholder='Smaller' _size='s' />
  <Input placeholder='Normal' _size='m' />
  <Input placeholder='Bigger' _size='l' />
  <Input placeholder='The biggest' _size='xl' />
</Flex>`

const placeholder = `<Flex flexDir='column'>
  <Input placeholder='Default placeholder' />
  <Input
    placeholder='Default placeholder'
    _placeholder={{
      color: 'red',
    }}
  />
</Flex>`

export default function InputDocs() {
	return (
		<div>
			<DocTitle>Input</DocTitle>
			<DocText mb={'5rem'}>
				The input element is used to create interactive controls in a web form
				that users can use to enter data.
			</DocText>
			<DocSubTitle id='import'>Import</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' mt={48}>
				Usage
			</DocSubTitle>
			<Card>
				<Input placeholder='Type here' />
			</Card>
			<DocSubTitle id='sizes' _size='2xl' mb={8} mt={48}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>`_size` prop is changing size of the input.</DocText>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Input placeholder='The smallest' _size='xs' />
					<Input placeholder='Smaller' _size='s' />
					<Input placeholder='Normal' _size='m' />
					<Input placeholder='Bigger' _size='l' />
					<Input placeholder='The biggest' _size='xl' />
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='placeholder' _size='2xl' mb={8} mt={48}>
				Placeholder styling
			</DocSubTitle>
			<DocText mb={16}>
				Use the `_placeholder` prop to apply your own styles to the placeholder
				of the input.
			</DocText>
			<Card mb={8}>
				<Flex flexDir='column'>
					<Input placeholder='Default placeholder' />
					<Input
						placeholder='Default placeholder'
						_placeholder={{
							color: 'red'
						}}
					/>
				</Flex>
			</Card>
			<Shiki code={placeholder} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Button' link={root.getComponentDocLink('button')} />
				<Next text='Textarea' link={root.getComponentDocLink('textarea')} />
			</Flex>
		</div>
	)
}
