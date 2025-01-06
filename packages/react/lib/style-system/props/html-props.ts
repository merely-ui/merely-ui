export const HTMLProps: string[] = [
	'color',
	'width',
	'height',
	'fontSize',
	'display'
]

export const MerelyHTMLProps: string[] = HTMLProps.map(
	p => 'html' + p[0].toUpperCase() + p.slice(1)
)

export interface HTMLProps {
	htmlColor: string
	htmlWidth: string
	htmlHeight: string
	htmlFontSize: string
}
