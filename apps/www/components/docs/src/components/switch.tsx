import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Card, Code, colors, Flex, Switch } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Switch } from "@merely-ui/react"`

const controlled = `import { useState } from "react"
import { Switch } from "@merely-ui/react"

export default function MySwitch() {
  const [active, setActive] = useState(false)

  return (
    <Card>
      <Switch 
        toggled={active} 
        onToggle={() => setActive(prev => !prev)}
      />
    </Card>
  )
}`

const sizes = `<Flex>
  <Switch _size='s' />
  <Switch _size='m' />
  <Switch _size='l' />
</Flex>`

const active = `<Card>
  <Switch activeBgColor={colors.purple.$300} />
</Card>`

const usage = `<Flex>
  <Switch />
  <Switch toggled />
  <Switch />
</Flex>`

export default function SwitchDocs() {
	return (
		<div>
			<DocTitle>Switch</DocTitle>
			<DocText mb={'5rem'}>
				The Switch component in React is a controlled input for selecting
				between two mutually exclusive options.
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
					<Switch />
					<Switch toggled />
					<Switch />
				</Flex>
			</Card>
			<Shiki code={usage} />
			<DocSubTitle id='sizes' mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>_size</Code> prop is changing size of the
				switch.
			</DocText>
			<Card mb={8}>
				<Flex>
					<Switch _size='s' />
					<Switch _size='m' />
					<Switch _size='l' />
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='controlled-usage' mt={32}>
				Controlled Usage
			</DocSubTitle>
			<DocText mb={16}>
				Below you can see example of controlled switch usage.
			</DocText>
			<Card mb={8}>
				<Switch />
			</Card>
			<Shiki code={controlled} />
			<DocSubTitle id='active-bg' mt={32}>
				Changing active background color
			</DocSubTitle>
			<Card mb={8}>
				<Switch activeBgColor={colors.purple.$300} />
			</Card>
			<Shiki code={active} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Select' link={root.getComponentDocLink('select')} />
				<Next text='Portal' link={root.getComponentDocLink('portal')} />
			</Flex>
		</div>
	)
}
