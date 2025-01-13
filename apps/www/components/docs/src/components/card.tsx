import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Card, Code, Flex } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Card } from "@merely-ui/react"`

const sizes = `<Flex alignItems='center'>
  <Card _size='s'>Card</Card>
  <Card _size='m'>Card</Card>
  <Card _size='l'>Card</Card>
</Flex>`

export default function CardDocs() {
	return (
		<div>
			<DocTitle>Card</DocTitle>
			<DocText mb={'5rem'}>
				The Card component presents content in a stylish, encapsulated layout
				for easy organization and display.
			</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' mt={32}>
				Usage
			</DocSubTitle>
			<Card>
				<Card>Some card</Card>
			</Card>
			<DocSubTitle id='sizes' _size='2xl' mb={8} mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>_size</Code> prop is changing size of the
				card.
			</DocText>
			<Card mb={8}>
				<Flex alignItems='center'>
					<Card _size='s'>Card</Card>
					<Card _size='m'>Card</Card>
					<Card _size='l'>Card</Card>
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Avatar' link={root.getComponentDocLink('avatar')} />
				<Next text='Tag' link={root.getComponentDocLink('tag')} />
			</Flex>
		</div>
	)
}
