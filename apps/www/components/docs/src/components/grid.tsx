import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Box, Card, colors, Flex, Grid } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Grid } from "@merely-ui/react"`

const usage = `<Grid gridTemplateColumns='repeat(2, max-content)'>
  <Box w={25} h={25} bgColor={colors.teal.$200} />
  <Box w={25} h={25} bgColor={colors.teal.$200} />
  <Box w={25} h={25} bgColor={colors.teal.$200} />
  <Box w={25} h={25} bgColor={colors.teal.$200} />
</Grid>`

export default function GridDocs() {
	return (
		<div>
			<DocTitle>Grid</DocTitle>
			<DocText mb={'5rem'}>
				Grid is a component that allows you to easily manipulate elements in two
				axes concurrently.
			</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' mt={32}>
				Usage
			</DocSubTitle>
			<Card mb={8}>
				<Grid gridTemplateColumns='repeat(2, max-content)'>
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
				</Grid>
			</Card>
			<Shiki code={usage} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Stack' link={root.getComponentDocLink('stack')} />
				<Next text='Box [Template]' link={root.getComponentDocLink('box')} />
			</Flex>
		</div>
	)
}
