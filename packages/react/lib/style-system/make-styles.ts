import { css, cx } from '@emotion/css'
import { StringObject } from './types'

export const makeStyles = (
	styles: StringObject,
	className?: string,
	overlapCss?: StringObject
) => {
	return cx(className, css(overlapCss), css(styles))
}
