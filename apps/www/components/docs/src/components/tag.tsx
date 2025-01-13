import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Card, colors, Flex, Tag } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Tag } from "@merely-ui/react"`

const sizes = `<Flex alignItems='center'>
  <Tag _size='s'>Tag</Tag>
  <Tag _size='m'>Tag</Tag>
  <Tag _size='l'>Tag</Tag>
</Flex>`

const usage = `<Flex>
  <Tag>Sale</Tag>
  <Tag bgColor={colors.teal.$200}>Sale</Tag>
  <Tag bgColor={colors.orange.$200}>Sale</Tag>
</Flex>`

const variants = `<Flex alignItems='center'>
  <Tag variant='solid'>Tag</Tag>
  <Tag variant='outline'>Tag</Tag>
</Flex>`

export default function TagDocs() {
	return (
		<div>
			<DocTitle>Tag</DocTitle>
			<DocText mb={'5rem'}>
				The Tag component represents a label or category, often used to
				highlight keywords or topics within content.
			</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' mt={32}>
				Usage
			</DocSubTitle>
			<Card mb={8}>
				<Flex>
					<Tag>Sale</Tag>
					<Tag bgColor={colors.teal.$200}>Sale</Tag>
					<Tag bgColor={colors.orange.$200}>Sale</Tag>
				</Flex>
			</Card>
			<Shiki code={usage} />
			<DocSubTitle id='sizes' mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>`_size` prop is changing size of the tag.</DocText>
			<Card mb={8}>
				<Flex alignItems='center'>
					<Tag _size='s'>Tag</Tag>
					<Tag _size='m'>Tag</Tag>
					<Tag _size='l'>Tag</Tag>
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='variants' mt={32}>
				Variants
			</DocSubTitle>
			<DocText mb={16}>`variant` prop is changing variant of the tag.</DocText>
			<Card mb={8}>
				<Flex alignItems='center'>
					<Tag variant='solid'>Tag</Tag>
					<Tag variant='outline'>Tag</Tag>
				</Flex>
			</Card>
			<Shiki code={variants} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Card' link={root.getComponentDocLink('card')} />
				<Next text='Button' link={root.getComponentDocLink('button')} />
			</Flex>
		</div>
	)
}
