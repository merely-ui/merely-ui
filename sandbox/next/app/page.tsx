import { Button, colors } from '@merely-ui/react'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<Button bgColor={colors.teal.$100}>Click</Button>
		</main>
	)
}
