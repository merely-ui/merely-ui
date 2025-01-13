import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Box, Card, colors, Flex } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Flex } from "@merely-ui/react"`
const usage = `<Flex>
  <Box w={25} h={25} bgColor={colors.yellow.$200} />
  <Box w={25} h={25} bgColor={colors.yellow.$200} />
  <Box w={25} h={25} bgColor={colors.yellow.$200} />
</Flex>`
const direction = `
<Flex flexDir='column'>
  <Box w={25} h={25} bgColor={colors.yellow.$200} />
  <Box w={25} h={25} bgColor={colors.yellow.$200} />
  <Box w={25} h={25} bgColor={colors.yellow.$200} />
</Flex>`

export default function FlexDocs() {
	return (
		<div>
			<DocTitle>Flex</DocTitle>
			<DocText mb={'5rem'}>
				Flex is a component that allows you to easily manipulate elements in one
				of the axes
			</DocText>
			<DocSubTitle
				scrollMarginTop={125}
				id='import'
				_size='2xl'
				mb={12}
				mt={32}
			>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' _size='2xl' mb={12} mt={32}>
				Usage
			</DocSubTitle>
			<Card mb={8}>
				<Flex>
					<Box w={25} h={25} bgColor={colors.teal.$200} />
					<Box w={25} h={25} bgColor={colors.teal.$200} />
					<Box w={25} h={25} bgColor={colors.teal.$200} />
				</Flex>
			</Card>
			<Shiki code={usage} />
			<DocSubTitle id='direction' _size='2xl' mb={12} mt={32}>
				Changing direction
			</DocSubTitle>
			<DocText mb={16}>
				You can use `flexDir` shorthand property to change a direction.
			</DocText>
			<Card mb={8}>
				<Flex flexDir='column'>
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
				</Flex>
			</Card>
			<Shiki code={direction} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Code' link={root.getComponentDocLink('code')} />
				<Next text='Stack' link={root.getComponentDocLink('stack')} />
			</Flex>
		</div>
	)
}
