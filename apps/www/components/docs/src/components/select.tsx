import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Card, Code, Flex, Select, SelectItem } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Select } from "@merely-ui/react"`
const usage = `<Select>
  <SelectItem>Mango🥭</SelectItem>
  <SelectItem>Apple🍎</SelectItem>
</Select>`
const sizes = `<Flex>
  <Select _size='s'>
    <SelectItem>Mango🥭</SelectItem>
    <SelectItem>Apple🍎</SelectItem>
  </Select>
  <Select _size='m'>
    <SelectItem>Mango🥭</SelectItem>
    <SelectItem>Apple🍎</SelectItem>
  </Select>
  <Select _size='l'>
    <SelectItem>Mango🥭</SelectItem>
    <SelectItem>Apple🍎</SelectItem>
  </Select>
</Flex>`
const controlled = `import { useState } from "react"
import { Select } from "@merely-ui/react"

export default function MySelect() {
  const [value, setValue] = useState('')

  return (
    <Select value={value} onValueChange={value => setValue(value)}>
      <SelectItem>Mango🥭</SelectItem>
      <SelectItem>Apple🍎</SelectItem>
    </Select>
  )
}`
const selected = `<Select>
  <SelectItem>Mango🥭</SelectItem>
  <SelectItem selected>Apple🍎</SelectItem>
</Select>`

export default function SelectDocs() {
	return (
		<div>
			<DocTitle>Select</DocTitle>
			<DocText mb={'5rem'}>
				Select is a component for pick a value from list of options
			</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' _size='2xl' mb={12} mt={32}>
				Usage
			</DocSubTitle>
			<Card mb={8}>
				<Select>
					<SelectItem>Mango🥭</SelectItem>
					<SelectItem>Apple🍎</SelectItem>
				</Select>
			</Card>
			<Shiki code={usage} />
			<DocSubTitle id='sizes' mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>_size</Code> prop is changing size of the
				Select component.
			</DocText>
			<Card mb={8}>
				<Flex flexWrap='wrap'>
					<Select _size='s'>
						<SelectItem>Mango🥭</SelectItem>
						<SelectItem>Apple🍎</SelectItem>
					</Select>
					<Select _size='m'>
						<SelectItem>Mango🥭</SelectItem>
						<SelectItem>Apple🍎</SelectItem>
					</Select>
					<Select _size='l'>
						<SelectItem>Mango🥭</SelectItem>
						<SelectItem>Apple🍎</SelectItem>
					</Select>
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='controlled-usage' mt={32}>
				Controlled Usage
			</DocSubTitle>
			<DocText mb={16}>
				Below you can see example of controlled Select usage.
			</DocText>
			<Card mb={8}>
				<Select>
					<SelectItem>Mango🥭</SelectItem>
					<SelectItem>Apple🍎</SelectItem>
				</Select>
			</Card>
			<Shiki code={controlled} />
			<DocSubTitle id='selected' mt={32}>
				Default selected option
			</DocSubTitle>
			<DocText mb={16}>
				Use the <Code display='inline-flex'>selected</Code> prop to select
				option by default
			</DocText>
			<Card mb={8}>
				<Select>
					<SelectItem>Mango🥭</SelectItem>
					<SelectItem selected>Apple🍎</SelectItem>
				</Select>
			</Card>
			<Shiki code={selected} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Popover' link={root.getComponentDocLink('popover')} />
				<Next text='Switch' link={root.getComponentDocLink('switch')} />
			</Flex>
		</div>
	)
}
