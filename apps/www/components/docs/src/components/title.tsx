import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Card, Code, Flex, Title } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Title } from "@merely-ui/react"`

const sizes = `<Flex alignItems='flex-start' flexDir='column'>
  <Title size='xs'>Some Title...</Title>
  <Title size='s'>Some Title...</Title>
  <Title size='m'>Some Title...</Title>
  <Title size='l'>Some Title...</Title>
  <Title size='xl'>Some Title...</Title>
  <Title _size='2xl'>Some Title...</Title>
  <Title _size='3xl'>Some Title...</Title>
</Flex>`

const as = `<Flex alignItems='flex-start' flexDir='column'>
  <Title as='h2'>I am h2😀</Title>
  <Text as='h4'>I am a h4!😀</Text>
</Flex>`

export default function TitleDocs() {
	return (
		<div>
			<DocTitle>Title</DocTitle>
			<DocText mb={'5rem'}>
				Title component is used to create headings at an interface.
			</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' _size='2xl' mb={12} mt={32}>
				Usage
			</DocSubTitle>
			<Card>
				<Title>It&apos;s a Title</Title>
			</Card>
			<DocSubTitle id='sizes' _size='2xl' mb={8} mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>_size</Code> prop is changing size of the
				Title component.
			</DocText>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Title _size='xs'>Some Title...</Title>
					<Title _size='s'>Some Title...</Title>
					<Title _size='m'>Some Title...</Title>
					<Title _size='l'>Some Title...</Title>
					<Title _size='xl'>Some Title...</Title>
					<Title _size='2xl'>Some Title...</Title>
					<Title _size='3xl'>Some Title...</Title>
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='as' _size='2xl' mb={8} mt={32}>
				Changing title level
			</DocSubTitle>
			<DocText mb={16}>
				By default, <Code display='inline-flex'>Title</Code> component is
				rendering <Code display='inline-flex'>h3</Code> HTML element, but you
				can easily change it by using <Code display='inline-flex'>as</Code>{' '}
				prop.
			</DocText>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Title as='h2'>I am h2😀</Title>
					<Title as='h4'>I am a h4!😀</Title>
				</Flex>
			</Card>
			<Shiki code={as} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Text' link={root.getComponentDocLink('text')} />
				<Next text='Code' link={root.getComponentDocLink('code')} />
			</Flex>
		</div>
	)
}
