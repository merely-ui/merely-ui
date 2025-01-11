import {
	AdvantagesSection,
	CodeSection,
	ReadyToStartSection,
	WelcomeSection
} from './sections'

export default function Home() {
	return (
		<>
			<WelcomeSection />
			<CodeSection />
			<AdvantagesSection />
			<ReadyToStartSection />
		</>
	)
}
