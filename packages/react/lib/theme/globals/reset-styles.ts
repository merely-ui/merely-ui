export const ResetCSS = {
	'*,*::before,*::after': { boxSizing: 'border-box' },
	html: {
		MozTextSizeAdjust: 'none',
		WebkitTextSizeAdjust: 'none',
		textSizeAdjust: 'none'
	},
	'body,h1,h2,h3,h4,p,figure,blockquote,dl,dd': { margin: 0 },
	'ul,ol': { listStyle: 'none' },
	li: { listStyleType: 'none' },
	'h1,h2,h3,h4': { textWrap: 'balance' },
	'img,picture': { maxWidth: '100%', display: 'block' },
	'input,button,textarea,select': {
		border: 'none',
		outline: 'none',
		font: 'inherit'
	}
}
