import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Card, Code, Flex, Text } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

export const importCode = `import { Text } from "@merely-ui/react"`

export const sizes = `<Flex alignItems='flex-start' flexDir='column'>
  <Text _size='xs'>Some text...</Text>
  <Text _size='s'>Some text...</Text>
  <Text _size='m'>Some text...</Text>
  <Text _size='l'>Some text...</Text>
  <Text _size='xl'>Some text...</Text>
  <Text _size='2xl'>Some text...</Text>
  <Text _size='3xl'>Some text...</Text>
</Flex>`

export const as = `<Flex alignItems='flex-start' flexDir='column'>
  <Text as='span'>I rendered as span😀</Text>
  <Text as='div'>I am a div!😀</Text>
</Flex>`

export default function TextDocs() {
	return (
		<div>
			<DocTitle>Text</DocTitle>
			<DocText mb={'5rem'}>
				Text component is used to create text at an interface.
			</DocText>
			<DocSubTitle id='import'>Import</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' mt={32}>
				Usage
			</DocSubTitle>
			<Card>
				<Text>Some text...</Text>
			</Card>
			<DocSubTitle id='sizes' _size='2xl' mb={8} mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>_size</Code> prop is changing size of the
				text component.
			</DocText>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Text _size='xs'>Some text...</Text>
					<Text _size='s'>Some text...</Text>
					<Text _size='m'>Some text...</Text>
					<Text _size='l'>Some text...</Text>
					<Text _size='xl'>Some text...</Text>
					<Text _size='2xl'>Some text...</Text>
					<Text _size='3xl'>Some text...</Text>
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='as' _size='2xl' mb={8} mt={32}>
				Using <Code display='inline-flex'>as</Code> prop
			</DocSubTitle>
			<DocText mb={16}>
				By default, <Code display='inline-flex'>Text</Code> component is
				rendering <Code display='inline-flex'>p</Code> HTML element, but you can
				change it by using <Code display='inline-flex'>as</Code> prop.
			</DocText>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Text as='span'>I rendered as span😀</Text>
					<Text as='div'>I am a div!😀</Text>
				</Flex>
			</Card>
			<Shiki code={as} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Overview' link={root.getComponentDocLink('overview')} />
				<Next text='Title' link={root.getComponentDocLink('title')} />
			</Flex>
		</div>
	)
}
