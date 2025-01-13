import DocPage from '../../../components/docs/page/doc-page'

export default async function Page({
	params
}: {
	params: Promise<{ slug: string[] }>
}) {
	const { slug } = await params

	return <DocPage slug={slug} />
}
