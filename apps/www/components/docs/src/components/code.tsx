import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Card, Code, Flex } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Code } from "@merely-ui/react"`

const sizes = `<Flex alignItems='flex-start' flexDir='column'>
  <Code _size='s'>{\`<Component />\`}</Code>
  <Code _size='m'>{\`<Component />\`}</Code>
  <Code _size='l'>{\`<Component />\`}</Code>
</Flex>`

export default function CodeDocs() {
	return (
		<div>
			<DocTitle>Code</DocTitle>
			<DocText mb={'5rem'}>
				Code component is used to display inline code at an interface.
			</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' mt={32}>
				Usage
			</DocSubTitle>
			<Card>
				<Code display='inline-flex'>Providers.tsx</Code>
			</Card>
			<DocSubTitle id='sizes' mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>_size</Code> prop is changing size of the
				text component.
			</DocText>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Code _size='s'>{`<Component />`}</Code>
					<Code _size='m'>{`<Component />`}</Code>
					<Code _size='l'>{`<Component />`}</Code>
				</Flex>
			</Card>
			<Shiki code={sizes} />

			<Flex justifyContent='space-between' my={64}>
				<Previous text='Title' link={root.getComponentDocLink('title')} />
				<Next text='Flex' link={root.getComponentDocLink('flex')} />
			</Flex>
		</div>
	)
}
