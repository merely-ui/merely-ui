import {
	BundledLanguage,
	codeToHtml,
	LanguageInput,
	SpecialLanguage,
	StringLiteralUnion
} from 'shiki'

interface ShikiCodeBlockProps {
	code: string
	lang?: ShikiLang
}
type ShikiLang =
	| LanguageInput
	| SpecialLanguage
	| StringLiteralUnion<BundledLanguage, string>

export default async function Shiki({
	code,
	lang = 'javascript'
}: ShikiCodeBlockProps) {
	const out = await shikiHighlight(code, lang)

	return <div className='code' dangerouslySetInnerHTML={{ __html: out }} />
}

async function shikiHighlight(code: string, lang: ShikiLang) {
	const out = await codeToHtml(code, {
		lang: lang as string,
		themes: {
			dark: 'dark-plus',
			light: 'dark-plus'
		}
	})

	return out
}
