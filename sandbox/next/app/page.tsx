import { Button, colors } from '@merely-ui/react'

export default function Home() {
	return (
		<main>
			<Button bgColor={colors.teal.$100}>Click</Button>
			<Button mt={100} bgColor={colors.teal.$100}>
				Click
			</Button>
			<Button mt={100} bgColor={colors.teal.$100}>
				Click
			</Button>
			<Button mt={100} bgColor={colors.teal.$100}>
				Click
			</Button>
		</main>
	)
}
